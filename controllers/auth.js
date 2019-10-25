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
function login(req, res){
  User
    .findOne({ email: req.body.email })
    .then(user => {
      // condition: is a user present? Or, is the validatePassword method returning false
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(404).json({ message: 'Not Found' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      res.status(202).json({ message: `Welcome back ${user.username}`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

function profile(req, res){
  User
    .findById(req.params.id)
    .populate('eventsAttend')
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      res.status(200).json(user)
    })
    .catch(err => res.status(400).json(err))
}

module.exports = { register, login, profile }