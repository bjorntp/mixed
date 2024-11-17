//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login)

// validate token route
router.get('/auth', userAuth.validate)

module.exports = router
