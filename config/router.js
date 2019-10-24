const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoot')

router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router