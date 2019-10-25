const Event = require('../models/Event')
const User = require('../models/User')

// INDEX ROUTE FOR EVENT - '/events'
function index(req, res) {
  Event
    .find()
    .populate('hostUser')
    // .populate(['attendees'])
    .then(events => res.status(200).json(events))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

// SHOW ROUTE FOR EVENT - '/events/:id'
function show(req, res) {
  Event
    .findById(req.params.id)
    .populate('attendees')
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      res.status(200).json(event)
    })
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

// CREATE ROUTE FOR EVENT - '/events'
function create(req, res){
  req.body.hostUser = req.currentUser
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

// Comment ROUTE FOR EVENT - '/events/:id/comments'
function commentCreate(req, res){
  //Attaching user to comment
  req.body.user = req.currentUser
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      event.comments.push(req.body) //adds comment into event
      return event.save() //saves the event
    })
    .then((event) => res.status(201).json(event))
    .catch((err) => res.status(400).json(err))
}

// Comment delete ROUTE FOR EVENT - '/events/:id/comments/:commentId'
function commentDelete(req, res){
  Event
    .findById(req.params.id)
    .populate('comments.user')
    .populate('hostUser')
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      const comment = event.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser) && 
          !event.hostUser.equals(req.currentUser)
      ) return res.status(401).json({ message: 'Not Your Comment' })
      comment.remove()
      return event.save()
    })
    .then(event => res.status(202).json(event))
    .catch(err => res.status(400).json(err))
}

// Comment update ROUTE FOR EVENT - '/events/:id/comments/:commentId'
function commentUpdate(req, res){
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event) return res.status(404).json({ message: 'Not Found' })
      const comment = event.comments.id(req.params.commentId)
      return comment.set(req.body)
    })
    .then(comment => comment.save())
    .then(comment => res.status(202).json(comment))
    .catch(err => res.status(400).json(err))
}


// POST: Attend event ROUTE FOR EVENT - '/events/:id/attend'
function attendEvent(req, res){
  req.body.user = req.currentUser
  Event
    .findById(req.params.id)
    .then(event =>{
      if (!event) return res.status(404).json({ message: 'Not Found' })
      event.attendees.push(req.body.user)
      req.currentUser.eventsAttend.push(event)
      req.currentUser.save()
      return event.save()
    })
    .then(() => res.status(201).json(req.currentUser))
    .catch(err => res.status(400).json(err))
}

function unAttendEvent(req, res){
  req.body.user = req.currentUser
  Event
    .findById(req.params.id)
    .then(event =>{
      if (!event) return res.status(404).json({ message: 'Not Found' })
      event.attendees.remove(req.body.user)
      req.currentUser.eventsAttend.remove(event)
      req.currentUser.save()
      return event.save()
    })
    .then(() => res.status(201).json(req.currentUser))
    .catch(err => res.status(400).json(err))
}



module.exports = { create, index, show, update, delete: deleteEvent, commentCreate, commentDelete, attendEvent, unAttendEvent, commentUpdate }