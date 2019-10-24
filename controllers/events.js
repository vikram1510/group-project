const Event = require('../models/Event')


function create(req, res){
  Event
    .create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => console.log(err))
}

module.exports = { create }