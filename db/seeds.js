const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Event = require('../models/Event')
const User = require('../models/User')
const faker = require('faker')


// empty array for users
const users = []


// make a new user and push to users array 20 times
for (let i = 0; i < 20; i++) {
  
  const user = {
    username: faker.name.findName(),
    email: faker.internet.email(),
    password: 'pass',
    passwordConfirmation: 'pass',
    profilePic: faker.image.avatar()
  }

  users.push(user)
}

console.log(users)

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) //if connnect fails
    db.dropDatabase() //empties db

    // ADD USERS
      .then(() => {
        return User.create(users.concat([
          {
            username: 'Soph',
            email: 'soph@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg'
          },
          {
            username: 'Reema',
            email: 'reema@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/amanruzaini/128.jpg'
          },
          {
            username: 'Tom',
            email: 'tom@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/puzik/128.jpg'
          },
          {
            username: 'Vikram',
            email: 'vikram@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            profilePic: 'https://s3.amazonaws.com/uifaces/faces/twitter/RussellBishop/128.jpg'
          }
        ]))
      })

    // ADD EVENTS
      .then((users) => {
        console.log(`${users.length} users created`)
        return Event.create([
          {
            name: 'Project - learn by building in Amazon Web services!',
            location: 'Infinity Works, 27 Bush Ln, London EC4R 0AA',
            description: 'So you\'re new? Great come along, if we get a few new people they can start individual exercises together - or get stuck into a group one! This is the one part of a project which you could build out into a large portfolio piece. The project overall will be broken down into:   1) Simple Frontend Website and deployment pipeline.   2) Backend API with Serverless infrastructure   3) More complex frontend that uses backend API   ....Metrics, monitoring, Alerting, Microservices, Security....And much much more!',
            category: 'Java',
            price: 0,
            date: '2020-11-27',
            time: '19:00',
            industry: 'Retail',
            images: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
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
            price: '10',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ],
            time: '19:00'
          },
          {
            name: 'The Future of AI',
            location: 'Google',
            description: 'For the historians out there',
            price: '5',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Women in Tech',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '0',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Coding for Beginners',
            location: 'GA',
            description: 'For the historians out there',
            price: '5',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'React for Pizza lovers',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '10',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Innovations in Voice Design at Amazon',
            location: 'Principal Place, 1 Principal Place, London, EC2A 2BA, gb',
            description: 'Schedule',
            price: '0',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Introducing C++',
            location: 'Monument',
            description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms',
            category: 'C++',
            price: 5,
            date: '2019-11-29',
            time: '19:00',
            industry: 'Education',
            images: ['https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ],
            hostUser: users[2],
            attendees: [ users[0], users [1] ]
          },
          {
            name: 'Future of Blockchain',
            location: 'Soho',
            description: 'For the historians out there',
            price: '7',
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