const mongoose = require('mongoose')
const moment = require('moment')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 35 },
  location: { type: String, required: true }, //full address including 
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false }, //programming language
  date: { type: String, required: false },
  time: { type: String, required: false },
  image: { type: String, required: false },
  industry: { type: String },
  comments: {  type: [commentSchema] },
  hostUser: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
  attendees: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: false }]
}, 
{ 
  timestamps: true 
})

eventSchema.plugin(require('mongoose-unique-validator'))

// eventSchema.pre('save', function(next) {
//   this.date = moment(this.date).format('MMM Do YYYY')
//   next()
// })

module.exports = mongoose.model('Event', eventSchema)