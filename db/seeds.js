const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Event = require('../models/Event')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) //if connnect fails
    db.dropDatabase() //empties db

    // ADD USERS
      .then(() => {
        return User.create([
          {
            username: 'Soph',
            email: 'soph@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Reema',
            email: 'reema@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Tom',
            email: 'tom@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Vikram',
            email: 'vikram@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Andy',
            email: 'andy@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Louise',
            email: 'louise@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Al',
            email: 'al@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Wend',
            email: 'wend@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Pete',
            email: 'pete@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Rich',
            email: 'rich@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Bhav',
            email: 'bhav@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Frank',
            email: 'frank@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Lib',
            email: 'lib@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Debs',
            email: 'debs@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'JP',
            email: 'jp@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Els',
            email: 'els@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Millie',
            email: 'millie@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Lottie',
            email: 'Lottie@email',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })

    // ADD EVENTS
      .then((users) => {
        console.log(`${users.length} users created`)
        return Event.create([
          {
            name: 'Javascript History',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '5',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Python Masterclass',
            location: 'Shoreditch',
            description: 'How to excel in Python',
            price: '10'
          },
          {
            name: 'The Future of AI',
            location: 'Google',
            description: 'For the historians out there',
            price: '5'
          },
          {
            name: 'Women in Tech',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '0'
          },
          {
            name: 'Coding for Beginners',
            location: 'GA',
            description: 'For the historians out there',
            price: '5'
          },
          {
            name: 'React for Pizza lovers',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '10'
          },
          {
            name: 'Innovations in Voice Design at Amazon',
            location: 'Principal Place, 1 Principal Place, London, EC2A 2BA, gb',
            description: 'Schedule',
            price: '0'
          },
          {
            name: 'Future of Blockchain',
            location: 'Soho',
            description: 'For the historians out there',
            price: '7'
          }
          
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)