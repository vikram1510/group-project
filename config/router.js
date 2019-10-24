const router = require('express').Router()
const events = require('../controllers/events')
// const user = require('../controllers/user')

router.route('/events')
  .get(events.index)
  .post(events.create)

router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete)

module.exports = router