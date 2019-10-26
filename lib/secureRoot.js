const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/User')

function secureRoot(req, res, next){

  // get headers from the request
  const headers = req.headers

  // check if the user provided valid Authorization in the header
  if (!headers.authorization || !headers.authorization.startsWith('Bearer')){
    console.log('headers is broken')
    return res.status(401).json({ error: 'unauthorised' })
  }

  // remove the Bearer string
  const token = headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(401).json({ error: 'unauthorised' })

    User.findById(payload.sub)
      .populate('eventsAttend')
      .then(user => {
        if (!user) return res.status(401).json({ error: 'unauthorised' })
        req.currentUser = user
        next()
      })
      .catch(() => res.status(401).json({ error: 'unauthorized' }))
  })

}

module.exports = secureRoot



