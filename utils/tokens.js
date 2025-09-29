import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
  return jwt.sign(
    {
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        bio: user.bio,
        location: user.location,
        profilePic: user.profilePic,
        avatar: user.avatar
      }
    }, 
    process.env.TOKEN_SECRET,
    { expiresIn: '2d' }
  )
}
