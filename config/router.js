const router = require('express').Router()
const events = require('../controllers/events')
// const user = require('../controllers/user')

router.route('/events')
  .get(events.index)
  .post(events.create)

router.route('/events/:id')
  .get(events.show)


router.route('/events/:id')
  .put(events.update)

module.exports = router