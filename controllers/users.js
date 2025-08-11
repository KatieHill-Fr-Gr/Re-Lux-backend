import User from '../models/user.js'
import express from 'express'
import { InvalidDataError, UnauthorizedError } from '../utils/errors.js'
import bcrypt from 'bcrypt'
import verifyToken from '../middleware/verifyToken.js'
import { generateToken } from '../utils/tokens.js'
import Item from '../models/item.js'


const router = express.Router()

// *Starting path: /api/auth
// *Sign Up
router.post('/sign-up', async (req, res, next) => {
  try {
    const { username, email, password, passwordConfirmation} = req.body

    // Check if username already exists
  const existingUsername = await User.findOne({ username })
  if (existingUsername) {
    return res.status(400).json({ message: 'Username already exists' })
  }

 // Check if email already exists
  const existingEmail = await User.findOne({ email })
  if (existingEmail) {
    return res.status(400).json({ message: 'Email already exists' })
  }

    // password confirmation
    if (password !== passwordConfirmation) {
      throw new InvalidDataError('Passwords do not match.', 'password')
    }

    // create user
    const newUser = await User.create({ username, email, password })

    // JWT user info token
    const token = generateToken(newUser)

    // Send the response to the client
    return res.status(201).json({token:token})



  } catch (error) {
    next(error)
    }
})

// *Sign In
router.post('/sign-in', async (req, res, next) => {
  try {
    //search for the user by username OR email
const foundUser = await User.findOne({$or:[{username:req.body.identifier},{email:req.body.identifier}]})

    if (!foundUser) {throw new UnauthorizedError('User not found')}

    // compare the hash against the provded plain text password
    if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
      throw new UnauthorizedError('Password is incorrect')
    }

// generate the token
const token = generateToken(foundUser)

// send the response to the client
    // res.status(200).json({token:token})

    // responded message
    res.status(200).json({
      message: 'Login successful',
      user: foundUser,
      token
    })
  } catch (error) {
    next(error)
  }
})


// * Profile

router.get('/users/:username', async (req, res) => {
  try {
      const viewer = req.session?.user || null;
      const profileUser = await User.findOne({ username: req.params.username });
      if (!profileUser) {
          return res.status(404).json({ message: 'User not found' });
      }
      const isOwner = viewer && viewer._id.toString() === profileUser._id.toString();
      // Always fetch public items (or all if owner)1
      const myItems = await Item.find({
          contributor: profileUser._id,
          ...(isOwner ? {} : { visibility: 'public' })  // Optional filtering
      }).populate('contributor');
      // Only return liked items if profile owner
      const likedItems = isOwner
          ? await Item.find({ likedbyUsers: profileUser._id }).populate('contributor')
          : [];
      // Build the profile response
      const profile = {
          username: profileUser.username,
          avatar: profileUser.avatar || null,
          bio: profileUser.bio || '',
          items: myItems,
          ...(isOwner && {
              likedItems,
              email: profileUser.email,
          })
      };
      return res.json(profile);
  } catch (error) {
      next(error);
  }
});


// * Update User (PUT)
router.put('/users/:userId', verifyToken, async (req, res, next) => {
  try {

    const { username, email, bio, location, profilePic } = req.body
    
    // Check if user exists
    const targetUserId = req.params.userId
    const existingUser = await User.findById(targetUserId)
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Check if the logged-in user is the owner
    const isOwner = req.user && req.user._id.toString() === existingUser._id.toString()
    if (!isOwner) {
      throw new UnauthorizedError('You can only update your own profile')
    }

    // Check if new username/email already exists (if being changed)
    if (username && username !== existingUser.username) {
      const usernameExists = await User.findOne({ 
        username, 
        _id: { $ne: existingUser._id } // * except the current user (not equal)
      })
      if (usernameExists) {
        throw new InvalidDataError('Username already exists')
      }
    }

    if (email && email !== existingUser.email) {
      const emailExists = await User.findOne({ 
        email, 
        _id: { $ne: existingUser._id }  
      })
      if (emailExists) {
        throw new InvalidDataError('Email already exists')
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      {
        ...(username && { username }),
        ...(email && { email }),
        ...(bio !== undefined && { bio }),
        ...(location !== undefined && { location }),
        ...(profilePic && { profilePic })
      },
      { new: true, runValidators: true }
    )

    // Generate new token with updated user info
    const token = generateToken(updatedUser)

    return res.status(200).json({
      message: 'User updated successfully',
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        profilePic: updatedUser.profilePic,
        bio: updatedUser.bio,
        location: updatedUser.location
      },
      token
    })

  } catch (error) {
    next(error)
  }
})

// * Delete User (DELETE)
router.delete('/users/:userId', verifyToken, async (req, res, next) => {
  try {
    
    const targetUserId = req.params.userId
    // Check if user exists
    const existingUser = await User.findById(targetUserId)
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Check if the logged-in user is the owner
    const isOwner = req.user && req.user._id.toString() === existingUser._id.toString()
    if (!isOwner) {
      throw new UnauthorizedError('You can only delete your own account')
    }

    // Delete the user
    await User.findByIdAndDelete(existingUser._id)

    return res.status(200).json({
      message: 'User account deleted successfully'
    })

  } catch (error) {
    next(error)
  }
})


export { router as usersRouter }