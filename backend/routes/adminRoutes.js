const express = require('express')

const {
  registerAdmin,
  loginAdmin
} = require('../controllers/adminController')

const router = express.Router()

// REGISTER ADMIN
router.post('/register', registerAdmin)

// LOGIN ADMIN
router.post('/login', loginAdmin)

module.exports = router