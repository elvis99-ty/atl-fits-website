const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn : '7d'
    })
}

const registerAdmin = async (req, res) => {
    try {
        const { email, password} = req.body

        const adminExists = await Admin.findOne({ email })
        
        if(adminExists) {
            return res.status(400).json({
                message : 'Admin already exists'
            })
        }

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        const admin = await Admin.create({
            email,
            password : hashedPassword
        })

        res.status(201).json({
            _id : admin._id,
            email : admin.email,
            token : generateToken(admin._id)
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        const admin = await Admin.findOne({email})

        if (!admin) {
            return res.status(400).json({
                message : 'Invalid Credentials'
            })
        }

        const isMatch = await bcrypt.compare(password, admin.password)

        if(!isMatch) {
            return res.status(400).json({
                message : 'Invalid Credentials'
            })
        }
        res.status(200).json({
            _id : admin._id,
            email : admin.email,
            token : generateToken(admin._id)
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = {
    registerAdmin,
    loginAdmin
}