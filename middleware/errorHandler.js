const logError = (err) => {
  console.log ('--------------------------------')
  console.log ('🚨🚨   ERROR   🚨🚨')
  console.log ('Error: ', err.message)
  console.log ('Name: ', err.name)
  console.log ('Status: ', err.status)
  console.log ('Field: ', err.field)
  console.log ('--------------------------------')
  console.log ('🔍  STACK TRACE  🔍')
  console.log (err.stack)
  console.log ('--------------------------------')
  console.log ('The above error occurred during the below request:')
}


const errorHandler = (err, req, res, next) => {
  logError(err)

if (err.name === 'NotFound') {
  return res.status(404).json({ message: 'Not found' })
}

  if (err.name === 'InvalidDataError') {
    return res.status(err.status).json(err.response)
  }

  if (err.name === 'ValidationError') {
  const response = {}

  for (const keyName in err.errors) {
    response[keyName] = err.errors[keyName].properties.message
  }

  return res.status(400).json(response)
}

if (err.name === 'MongoServerError' && err.code === 11000) {
  const [keyName, keyValue] = Object.entries(err.keyValue)[0]
  return res.status(400).json({
    message: `The ${keyName} ${keyValue} already exists.`,
    field: keyName
  })
}

if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError')  {
  return res.status(401).json({ message: 'Unauthorized' })
}

if (err.name === 'CastError' && err.kind === 'ObjectId') {
  return res.status(404).json ({ message: 'Item not found' })
}

return res.status(500).json({ message: 'Internal Server Error' })


}


export default errorHandler