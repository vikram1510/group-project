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
    // JAVA ICON
    // <i class="fab fa-java"></i>
    // SWIFT ICON
    // <i class="fab fa-swift"></i>

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
          }

        ])
      })

      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)