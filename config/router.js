const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoot')

router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.update)
  .delete(secureRoute, events.delete)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/users/:id')
  .get(secureRoute, users.profile)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/events/:id/comments/:commentId')
  .delete(secureRoute, events.commentDelete)

router.route('/events/:id/attend')
  .post(secureRoute, events.attendEvent)

module.exports = router




