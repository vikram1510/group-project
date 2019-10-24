const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

// register function
function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(200).json({ message: `Welcome to the website techmaster ${user.username}!` }))
    .catch(next)
}

// login function
function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      // condition: is the user 
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(404).json({ message: 'Not Found' })
      }
    })
}

module.exports = { register, login }