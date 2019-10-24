const router = require('express').Router()
const events = require('../controllers/events')
// const user = require('../controllers/user')

router.route('/events')
  .get(events.index)
  .post(events.create)


module.exports = router