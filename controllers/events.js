const Event = require('../models/Event')

function index(req, res) {
  Event
    .find()
    .then(events => res.status(200).json(events))
    .catch(() => res.status(400).json({ message: 'Not Found' }))
}


function create(req, res){
  req.body.hostUser = req.currentUser
  Event
    .create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => console.log(err))
}

module.exports = { create, index }