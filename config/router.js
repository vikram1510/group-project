const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/auth')

router.route('/events')
  .post(events.create)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router