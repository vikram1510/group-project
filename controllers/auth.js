const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const faker = require('faker')

// register function
function register(req, res, next) {
  if (req.body) req.body.profilePic = faker.image.avatar()
  User
    .create(req.body)
    .then(user => {
      res.status(200).json({ message: `Welcome to the website techmaster ${user.username}!` })
    })
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
    .findById(req.currentUser._id) //get user id
    .populate('hostedEvents') //show full details of hosted event
    .then((user) => res.status(200).json(user)) //add hosted event to user
  
}

function updateProfile(req, res) {
  User
    .findById(req.currentUser._id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.status(202).json(user))
    .catch(err => res.json(err))
}

module.exports = { register, login, profile, updateProfile }