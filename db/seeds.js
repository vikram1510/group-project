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
            category: 'Javascript',
            date: '2019-10-30',
            price: '5',
            images: '',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Python Masterclass',
            location: 'Shoreditch',
            description: 'How to excel in Python',
            category: 'Python',
            date: '2019-10-30',
            price: '10',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ],
            time: '19:00'
          },
          {
            name: 'The Future of AI',
            location: 'Google',
            description: 'For the historians out there',
            category: 'Javascript',
            date: '2019-10-30',
            price: '5',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Women in Tech',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            category: 'Javascript',
            date: '2019-10-30',
            price: '0',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Coding for Beginners',
            location: 'GA',
            description: 'For the historians out there',
            category: 'Javascript',
            date: '2019-10-30',
            price: '5',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'React for Pizza lovers',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            category: 'Javascript',
            date: '2019-10-30',
            price: '10',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Innovations in Voice Design at Amazon',
            location: 'Principal Place, 1 Principal Place, London, EC2A 2BA, gb',
            description: 'Schedule',
            category: 'Javascript',
            date: '2019-10-30',
            price: '0',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Introducing C++',
            location: 'Monument',
            description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms',
            date: '2019-10-30',
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
            category: 'Javascript',
            date: '2019-10-30',
            price: '7',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Creative Code',
            location: 'Huckletree Shoreditch, 18 Finsbury Square,  London, EC2A 1AH',
            description: 'Welcome to the first Creative Code event. If you’re a coder that with a passion for making the web beautiful this Meetup should have you covered.The itinerary for this event is as follows:              18: 00 - Attendees arrive    18: 45 - Introduction    19: 00 - Sponsors    19: 05 - First talk    19: 40 - Second talk    20: 15 - Final words   20: 20 - Networking',
            category: 'Java',
            price: 0,
            date: '2020-12-27',
            time: '19:00',
            industry: 'Design',
            images: 'https://www.success.com/wp-content/uploads/2016/07/waystotapintoyourcreativeself.jpg',
            hostUser: users[3],
            attendees: [users[4], users[5], users[6]]
          },
          {
            name: 'London Clojure Dojo at ThoughtWorks',
            location: 'ThoughtWorks London, 1, 76-78 Wardour St, London W1F 0UR',
            description: 'The goal of the Clojure dojo is to raise the confidence and experience levels of those that attend through practical exercises. These events support those new to Clojure as well as more experienced developers from the London Clojure community.  Suggestions for practical coding challenges are added on http://www.londonclojurians.org/code-dojo/ as we find them and we also have a Github repository https://github.com/ldnclj   Clojure is a JVM language that has syntactically similarities to Lisp, full integration with Java and its libraries and focuses on providing a solution to the issue of single machine concurrency.   Its small core makes it surprisingly easy for Java developers to pick up and it provides a powerful set of concurrency strategies and data structures designed to make immutable data easy to work with.If you went to Rich Hickey’s LJC talk about creating Clojure you’ll already know this, if not it’s well worth watching the Rich Hickey “Clojure for Java Programmers” (http://skillsmatter.com/podcast/java-jee/clojure-for-java-programmers) video or Stuart Halloway “Radical Simplicity” (http://skillsmatter.com/podcast/java-jee/radical-simplicity) video.',
            category: 'Java',
            price: 0,
            date: '2020-07-08',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/03/16/35e584f4-46f3-11e9-b5dc-9921d5eb8a6d_image_hires_194000.JPG?itok=RiqWzzUS&v=1552736407',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Java Inaugural Meetup',
            location: 'Many Hands London, Biscuit Factory, Bermondsey, London',
            description: 'At this month\'s .NET Matters Keynote Evening, you\'re to be joined by Microsoft MVP in .NET, and author of Pro .NET Memory Management, Konrad Kokosa!',
            category: 'Java',
            price: 0,
            date: '2019-02-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://www.oracle.com/a/ocom/img/hp11-intl-java-logo.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Solandra Hands-On Tutorial & Emergent Behaviour In Insects',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: ' Tutorial on Solandra - a simple, modern TypeScript-first algorithmic art tool - James Porter   Talk on Emergent Behaviour In Insects - Alison Rice',
            category: 'Java',
            price: 0,
            date: '2020-11-17',
            time: '19:00',
            industry: 'Agrigulture',
            images: 'https://i.pinimg.com/236x/49/d2/e2/49d2e2c3943b6cb83938f14a7200aead--colorful-feathers-insect-art.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'LJC October Meetup',
            location: 'RecWorks - WeWork Moorgate, 1 Fore St, Barbican, London EC2Y 9DT',
            description: 'About the speakers   Sabrina Wons is a passionate Java developer working in the Product Development team at Rightmove, the UK\'s #1 property portal. Her team focuses on building microservices using technologies such as Spring, Kafka and ElasticSearch.  Rob Drury is a software product manager and Certified Scrum Owner, with 17 years experience across recruitment, fundraising, retail and finance software products.He is also a writer on small business issues from finance to recruitment, operations to agile delivery and a contributor to Real Business, Business Advice, and Medium.  Paulo Menon is a Principal Consultant specialised in RHDM(Drools) and RHPAM(JBPM) troubleshooting and deployments for Red Hat EMEA’s largest customers.With more than 18 years of experience in Java, 9 years working as Red Hat Middleware Consultant and focused on customer success, he’s one of the most accomplished consultants in EMEA.During his free time he is a mentor at meet a mentor and always willing to participate and give back to the Java community.',
            category: 'Java',
            price: 0,
            date: '2021-02-01',
            time: '19:00',
            industry: 'Finance',
            images: 'http://www.rec.uk.com/news-and-policy/corporate-blog/upload/images/2018%20blog%20images/Diversity---team-work---puzzle.png',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Lex Sokolin Presents - Exponential Decentralized Finance',
            location: '2 Leonard Circus, 62 Paul St, Hackney, London EC2A 4DQ',
            description: 'Lex Sokolin will discuss the macro financial and technological trends that are contributing to the exponential growth in digital assets and decentralized finance.   We have seen DeFi progress across the industry — from payments, to banking, lending and investments.Once there are thousands of decentralized autonomous financial manufacturers, what will be left for financial incumbents, emerging Fintechs and global AI tech companies?   This talk will also connect the dots on how these different services are likely to interact together and how people and companies can benefit from the emerging trend.',
            category: 'Java',
            price: 0,
            date: '2019-05-11',
            time: '19:00',
            industry: 'Finance',
            images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSko2tfsLj9AM8EgrZj2O3nFvWBQSwW_36ASJESZ84mEPsg5hCJ&s',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Keynote by Heather VanCura on The Future of Java and You',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: 'This session will explore how Java development has been brought into the open - several Java developer efforts have brought open source development processes and new levels of transparency and participation into their communities. The Java Community Process (JCP) program celebrates twenty years of Java standards development in 2019. Learn about the latest Java innovations to the Java SE Platform - Java SE 11, 12, 13 and beyond. Since the initiation of efforts to expand the developer participation in the Java community, Java standards development is more open that it ever has been.   Learn how to take part in the Java developer community and the upcoming changes to Java - you can participate as an individual, corporation, or nonprofit such as a Java user group(JUG).This session answers questions about why and how to participate in the evolution of the Java platform.You will also learn about the global Adoption programs and how you can participate in contributing to the future of Java.',
            category: 'Java',
            price: 0,
            date: '2021-04-22',
            time: '19:00',
            industry: 'Tech',
            images: 'https://pbs.twimg.com/profile_images/852650380739592193/oYvdlM7b_400x400.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Craftsmanship Round Table @ Codurance',
            location: 'Codurance, 3 Sutton Lane, EC1M 5PU',
            description: 'This is our monthly Software Craftsmanship round table to discuss technology, practices or whatever else takes our fancy.    If you\'re using some new technology you think others would be interested in, if you\'ve got a design or some code you\'d like to discuss, if you\'d like to discuss a specific practice, a problem you are having at work or you\'d simply like to see what others have got to say - come along and join in the conversation.    How does it work?    The first 15-30 minutes will be devoted to lightning talks.So if you\'ve got a cool demo, some new technology or just something you think the group might find interesting, controversial or just plain funny, bring it along and share with the group! Don\'t worry if you\'ve never given a lightning talk before - this is a great opportunity to give a talk in a friendly environment. We\ll have a projector and a whiteboard and all talks are restricted to no more than five minutes.',
            category: 'Java',
            price: 5,
            date: '2020-12-20',
            time: '19:00',
            industry: 'Tech',
            images: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'London Scala Talks: Daniela Sfregola',
            location: 'CodeNode, 8-31 Eldon St, London',
            description: 'Come along to another round of London Scala Talks! This month, we\'ll be hearing from our awesome Daniela Sfregola.We look forward to seeing you!',
            category: 'Java',
            price: 5,
            date: '2020-09-30',
            time: '19:00',
            industry: 'Retail',
            images: 'http://www.duchess-france.org/wp-content/uploads/2017/05/DanielaSfregolaArticle.png',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift - intro to building an iOS App',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: 'We return to more technical matters with a look at the programming language Swift and how Apple are pushing the language and it’s developers as, maybe, iPhone and iPad sales slow.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Serverless SWIFT and Combine',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: 'Schedule  7pm : How To Work with AWS Lambda in Swift   Discover the importance of the Serverless architecture for mobile apps and how the open- source Swift library created for AWS Lambda can allow Full Stack Swift development on AWS Serverless.   Andrea Scuderi   Senior native iOS Developer@BJSS with experience in the Retail, Finance, Banking, Energy and Media industries.He is the creator of Swift - Sprinter an open - source library to work with Swift on AWS Lambda and Trackyzer an app for Cyclists.  8pm : The Combine Framework',
            category: 'Swift',
            price: 0,
            date: '2020-02-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift - intro to building an iOS App',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: 'We return to more technical matters with a look at the programming language Swift and how Apple are pushing the language and it’s developers as, maybe, iPhone and iPad sales slow.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift Monthly #69, October Meetup',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: '18:15 - Doors open. Pizza and drinks are served     19: 00 - Building a Serverless API with GraphQL API and Microservicest Christoffer Noring (Microsoft)  This talk introduces technologies such as Serverless, GraphQL and Docker   19: 30 - The time and place for...Implementation Details // Johnny Magrippis (Funding Circle)    `Boolean(v)`, or`!!v` ? React\'s `.setState` or hooks? Interface directly with a Rest API, or through a GraphQL layer? Johnny explores when and where you should be focusing on implementation details such as these... Spoiler alert: it\'s not in your tests.   20: 00 - A Thousand Words: How I\'m still not using GUIs in 2019 // Lucas da Costa (Converge)',
            category: 'Swift',
            price: 0,
            date: '2021-01-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift - intro to building an iOS App',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: 'We return to more technical matters with a look at the programming language Swift and how Apple are pushing the language and it’s developers as, maybe, iPhone and iPad sales slow.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            images: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
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
            attendees: [users[0], users[1], users[2]]
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
            attendees: [users[0], users[1]]
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
            attendees: [users[0], users[1]]
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
            attendees: [users[2], users[1]]
          }
          
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)