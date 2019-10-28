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
            name: 'PHP PHP',
            location: '46 New Broad St, London EC2M 1JH',
            description: 'PHP! If you like the language - sign up now!',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Cobra Group',
            location: '16-17 Battle Bridge Ln, London, SE1 2HD',
            description: 'We are PHP fanatics, and invite all other like-minded individuals to join us.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Laravel Party',
            location: '77 Carlton Hill, London, NW8 9XD',
            description: 'Party hard with the Laravel Party (no not the film!). We love all things Laravel.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'print(PHP!)',
            location: '116 Cromwell Rd, Kensington, London, SW7 4XN',
            description: 'For coders of all abilities, print(PHP!) is a group where we all work on open source projects and help each other learn.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Symfony Appreciation Society',
            location: '12 Melcombe Pl, Marylebone, London, NW1 6JJ',
            description: 'The best PHP framework - Symfony! Join our group as we host speakers and seminars on the topic.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'We love PHP',
            location: '50-2 Broomhouse Rd, Fulham, London',
            description: 'Do you love PHP? So do we. Our events take place at 19:00, usually in a pub where we can meet, and chat.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'London PHP',
            location: 'Elmwood House, Rushcroft Rd, Brixton, London, SW2 1JL',
            description: 'Calling all London-based coders. Do you want to find other like-minded people who program in PHP? Sign up today.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Preimer PHP',
            location: '10 Godliman St, London, EC4V 5AJ',
            description: 'We host guest speakers from the industry at each event, all relevant to the coding language PHP.',
            category: 'PHP',
            price: 50,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'PHP Juniors',
            location: '100 King\'s Cross Rd, Kings Cross, London, WC1X 0ND',
            description: 'If you are new to PHP, consider our events! We have at least one event a month, and they are applicable to those of all abilities in PHP',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Dictionaries and Laravel',
            location: '31 Brady St, London, E1 5DJ',
            description: '',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: '',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          }
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)