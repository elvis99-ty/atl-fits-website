const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const protect = async (req, res, next) => {

  console.log(req.headers.authorization)

  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {

    try {

      token = req.headers.authorization.split(' ')[1]

      console.log('TOKEN:', token)

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      )

      console.log('DECODED:', decoded)

      req.admin = await Admin.findById(decoded.id)
        .select('-password')

      next()

    } catch (error) {

      console.log(error)

      return res.status(401).json({
        message: 'Not authorized'
      })

    }

  } else {

    return res.status(401).json({
      message: 'No token provided'
    })

  }

}

module.exports = protect