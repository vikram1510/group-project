const Event = require('../models/Event')

// INDEX ROUTE FOR EVENT - '/events'
function index(req, res) {
  Event
    .find()
    .then(events => res.status(200).json(events))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

// SHOW ROUTE FOR EVENT - '/events/:id'
function show(req, res) {
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      res.status(200).json(event)
        .catch(() => res.status(404).json({ message: 'Not Found' }))
    })
}

// CREATE ROUTE FOR EVENT - '/events'
function create(req, res) {
  Event
    .create(req.body)
    .then(event => res.status(201).json(event))
    .catch(err => console.log(err))
}

// UPDATE ROUTE FOR EVENT - '/events/:id'
function update(req, res) {
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      return event.set(req.body)
    })
    .then(event => event.save())
    .then(event => res.status(202).json(event))
    .catch(err => res.status(422).json(err))
}

// DELETE ROUTE FOR EVENT - '/events/:id'
function deleteEvent(req, res) {
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      return event.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

module.exports = { create, index, show, update, delete: deleteEvent }