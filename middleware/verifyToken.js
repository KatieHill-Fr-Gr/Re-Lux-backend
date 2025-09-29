import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../utils/errors.js'
import User from '../models/user.js'



const verifyToken = async (req, res, next) => {
  try {

const authHeader = req.headers.authorization

if (!authHeader) throw new UnauthorizedError('No authorization header provided')

  const token = authHeader.split(' ')[1]
  if (!token) throw new UnauthorizedError('No token provided')

  const payload = jwt.verify(token, process.env.TOKEN_SECRET)

const foundUser = await User.findById(payload.user._id)

req.user = foundUser

next()

  } catch (error) {
    next(error)
  }
}

export default verifyToken