const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})


const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  date: { type: Date, required: false },
  time: { type: String, required: false },
  images: { type: [String], required: false },
  industry: { type: String },
  comments: {  type: [commentSchema] },
  hostUser: { type: [mongoose.Schema.ObjectId], ref: 'User', required: false },
  attendees: { type: [mongoose.Schema.ObjectId], ref: 'User', required: false }
}, 
{ 
  timestamps: true 
})

module.exports = mongoose.model('Event', eventSchema)