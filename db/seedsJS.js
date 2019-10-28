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
            name: 'JS London',
            location: '103 Borough Rd, London SE1 0AA',
            description: 'Londons premier event for Javascript.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: 'Finance',
            images: 'https://images.unsplash.com/photo-1569025591510-a69144e20084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Hackney JavaScript',
            location: '151 Whiston Rd, London E2 8BL',
            description: 'Hackney is a fast growing borough in London, and we want to connect our developers all in one place! Doors open at 7pm.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-07',
            time: '19:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1558402989-4778474384c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[4]]
          },
          {
            name: 'JS Monthly',
            location: 'ExCeL, Royal Victoria Dock, 1 Western Gateway, Royal Docks, London E16 1XL',
            description: 'A monthly meeting for all JavaScript enthusiasts. Each month we host an event in the city with speakers from all across the industry.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-07',
            time: '21:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1516635707594-6949bdca3538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10], users[6]]
          },
          {
            name: 'React Meetup',
            location: '107 Cheapside, London EC2V 6DN',
            description: 'Grab a pint, and lets get chatting! A place for all developers to talk REACT.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-12',
            time: '18:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1519155031214-e8d583928bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10], users[1], users[3]]
          },
          {
            name: 'JavaScript Vue',
            location: '310 Uxbridge Rd, Shepherd\'s Bush, London W12 7LJ',
            description: 'Whats life without a nice Vue. Share your experience with like-minded folk and talk all about our favourite framework.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-15',
            time: '19:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[22]]
          },
          {
            name: 'JSathon',
            location: 'City, University of London',
            description: 'Our 43rd hackathon! 24 hours, 20 teams, 250 people - lets see what we can make!',
            category: 'JavaScript',
            price: 20,
            date: '2019-11-18',
            time: '19:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'London Coders',
            location: '200 Aldersgate St, London, EC1A 4HD',
            description: 'Beer and pizza... and code! This events speakers - JAVASCRIPT. If you\'re interested in this language, or just coding in general.. come down and make an appearance.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-22',
            time: '20:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'Reacters',
            location: '1-3 College Hill, London, EC4R 2RA',
            description: '',
            category: 'JavaScript',
            price: 10,
            date: '2019-11-25',
            time: '19:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'Angular',
            location: '7A Oakley St, Chelsea, London, SW3 5NN',
            description: '',
            category: 'JavaScript',
            price: 5,
            date: '2019-11-26',
            time: '18:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1554200876-29b5f89b3812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'Beginner JS',
            location: 'General Assembly, The Relay Building, 114 Whitechapel High St, Shadwell, London E1 7PT',
            description: '',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-28',
            time: '19:00',
            industry: '',
            images: 'https://images.unsplash.com/photo-1523575166472-a83a0ed1d522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          }

          
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)