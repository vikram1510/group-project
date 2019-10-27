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
            name: 'C++ London',
            location: 'Liverpool Street',
            description: 'C++ is a cross-platformed language that can be used to create sophisticated high-performance applications. C++ was developed by Bjarne Stroustrup at Bell labs in 1979, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory',
            category: 'C++',
            price: 0,
            date: '2019-11-25',
            time: '19:00',
            industry: 'Finance',
            images: ['https://i.redd.it/31b2ii8hchi31.jpg',
              'https://answers.unrealengine.com/storage/temp/69126-img1.png'
            ],
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
            name: 'Modern C++',
            location: 'Westminister',
            description: 'We often speak about classical and modern C++. What does that mean? First of all: What is modern C++?. There is a simple and a not so simple answer? The simple answer is. Modern C++ stands for C++ that is based on C++11, C++14, and C++17. I guess, you know it. This post and a series of further posts is about the not so simple answer.',
            category: 'C++',
            price: 10,
            date: '2019-12-20',
            time: '21:00',
            industry: 'Education',
            images: ['https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ],
            hostUser: users[2],
            attendees: [ users[0], users [1] ]
          },
          {
            name: 'Compilers in C++',
            location: 'Aldgate East',
            description: 'I recommend that people take Standard conformance very seriously when considering a compiler. If you can, avoid any compiler that doesn\'t closely approximate the ISO standard or fails to supply a solid implementation of the standard library. The recent releases from all the major C++ vendors do that. Most of these compilers are embedded in frameworks of software development tools and libraries. These frameworks, environments, and libraries can be most helpful, but do remember that their use can lock you into a single vendor and that some uses have significant run-time performance implications. When looking for C++ on the web, you find that much of the information is "hidden" under various product names. In fact, I had more luck finding C++ compilers using google.com than by going directly to vendors that I knew sold them. Here, I have chosen to list C++ implementations simply by the name of their provider, ignoring marketing labels.',
            category: 'C++',
            price: 15,
            date: '2019-11-2',
            time: '21:00',
            industry: 'Education',
            images: ['https://images.pexels.com/photos/60626/pexels-photo-60626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
              'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            ],
            hostUser: users[1],
            attendees: [ users[2], users [1] ]
          }
          
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)