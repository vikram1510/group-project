const Event = require('../models/Event')


function create(req, res){
  console.log(req.currentUser)
  Event
    .create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => console.log(err))
}

module.exports = { create }