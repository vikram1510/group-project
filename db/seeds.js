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
            name: 'Building in Amazon Web Services',
            location: 'Infinity Works, 27 Bush Ln, London EC4R 0AA',
            description: 'So you\'re new? Great come along, if we get a few new people they can start individual exercises together - or get stuck into a group one! This is the one part of a project which you could build out into a large portfolio piece. The project overall will be broken down into:   1) Simple Frontend Website and deployment pipeline.   2) Backend API with Serverless infrastructure   3) More complex frontend that uses backend API   ....Metrics, monitoring, Alerting, Microservices, Security....And much much more!',
            category: 'Java',
            price: 0,
            date: '2020-11-27',
            time: '19:00',
            industry: 'Retail',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg',
            hostUser: users[0],
            attendees: [users[1], users[2], users[3]]
          },
          {
            name: 'Javascript History',
            location: 'The Nave, 78 Bishopsgate, London EC2N 4AG',
            description: 'JavaScript has a rich and fascinating history. It continues to be one of the most hated languages on the planet, often for reasons that have long since faded into irrelevance. For the historians out there, find out more about the history of Javascript at The Nave.',
            category: 'Javascript',            
            price: 5,
            date: '2019-10-30',
            time: '18:30',
            image: 'https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg',
            industry: 'Tech',
            hostUser: users[1],
            attendees: [ users[0], users [2], users[3] ]
          },
          {
            name: 'Python Masterclass for Novices',
            location: 'Howard Hughes, Runway East Moorgate, Lower Ground, 10 Finsbury Square, London EC2A 1AF',
            description: 'The highly popular Introduction to Programming with Python short course teaches Python 3 and is suitable for complete beginners to programming, and to Python, which is a powerful open-source language that is very popular in the fields of data analysis, finance and web development. This practical short course is aimed at candidates with good computer literacy. It would also suit those with some prior knowledge of Python who wish to improve their skills.',
            category: 'Python',
            price: 10,
            date: '2019-10-30',
            time: '19:00',
            image: 'https://files.realpython.com/media/building_with_python_watermark.2ebe5beb5b1e.jpg',
            industry: 'Tech',
            hostUser: users[2],
            attendees: [ users[0], users [1], users[3] ]
          },
          {
            name: 'The Future of AI',
            location: 'Google for Startups Campus, 4-5 Bonhill St, Shoreditch, London EC2A 4BX',
            description: 'Artificial Intelligence (AI) has exploded in recent years, and AI-based technologies have become a core part of everyday life. Everything from social media timelines to online shopping recommendations, facial recognition systems to autonomous vehicles, are powered by AI. Rapid advances in machine learning and deep learning techniques mean that, over the coming years, AI will become increasingly sophisticated. Advanced AI could help to solve major problems in domains such as medicine and healthcare, energy usage, food supply and transportation. Many thinkers predict the emergence of ‘Artificial General Intelligence’ or even ‘superintelligence’, whereby the intellect of AI greatly exceeds the cognitive performance of humans in all domains.',
            category: 'Python',
            price: 5,
            date: '2019-10-30',
            time: '19:00',
            image: 'https://images.idgesg.net/images/article/2018/08/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-large.jpg',
            industry: 'Tech',
            hostUser: users[3],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Tech Women in Fashion',
            location: 'The Nave, 78 Bishopsgate, London EC2N 4AG',
            description: 'For the historians out there',
            category: 'Swift',
            price: 0,
            date: '2019-10-30',
            time: '18:30',
            image: 'https://www.traveldailymedia.com/assets/2018/05/women-in-tech2-e1526974561902.png',
            industry: 'Fashion',
            hostUser: users[0],
            attendees: [ users[1], users [2], users[3] ]
          },
          {
            name: 'Coding for Beginners',
            location: 'General Assembly London, The Relay Building, 114 Whitechapel High St, London E1 7PT',
            description: 'JavaScript is the programming language of HTML and the Web, and is easy to learn. This one-day short course will teach you JavaScript for all beginner programmers.',
            category: 'Javascript',
            price: 5,
            date: '2019-10-30',
            time: '13:00',
            image: 'https://s3.amazonaws.com/static-assets.generalassemb.ly/myga/og/share.png',
            industry: 'Tech',
            hostUser: users[1],
            attendees: [ users[0], users [2], users[3] ]
          },
          {
            name: 'Swift for Pizza lovers',
            location: 'Pizza Union, 25 Sandy\'s Row, Spitalfields, London E1 7HW',
            description: 'Swift is having a huge impact on the way we think about Web UI development. Our Meetups are an opportunity to learn why and share experiences. Join our social gathering, enjoy some pizza and let\'s talk Swift.',
            category: 'Swift',
            price: 10,
            date: '2019-10-30',
            time: '19:30',
            image: 'https://developer.apple.com/swift/images/swift-og.png',
            industry: 'Tech',
            hostUser: users[2],
            attendees: [ users[0], users [1], users[3] ]
          },
          {
            name: 'Travel VR',
            location: 'Principal Place, 1 Principal Place, London, EC2A 2BA',
            description: 'A lunch \'n learn session by Neutral Digital showcasing how VR has brought benefit to marketing, training and design across the transport sector, and how this technology will continue grow into a mainstay for the core business processes of an entire industry. Expect to see examples of work from major airlines, governing bodies, component designers and aircraft manufacturers alike, all delivered alongside a tasty (free!) lunch.',
            category: 'Javascript',
            price: 0,
            date: '2019-10-30',
            time: '13:30',
            image: 'https://www.sabre.com/wp/wp-content/uploads/shutterstock_341545919-e1460574545239-720x415.jpg',
            industry: 'Travel',
            hostUser: users[3],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Introducing C++',
            location: 'Principal Place, 1 Principal Place, London, EC2A 2BA',
            description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms',
            category: 'C++',
            price: 5,
            date: '2019-11-29',
            time: '19:00',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            industry: 'Tech',
            hostUser: users[0],
            attendees: [ users[1], users [2] ]
          },
          {
            name: 'Future of Ruby',
            location: 'General Assembly London, The Relay Building, 114 Whitechapel High St, London E1 7PT',
            description: 'There is a lot of discussion about the Ruby language demise. A Google Trends search shows that the Ruby interest over time isn’t decaying, but following the same pattern similar technologies are tracing. Come and listen to our discussion about Ruby and how it\'s place in the tech sector is looking.',
            category: 'Ruby',
            price: 7,
            date: '2019-10-30',
            time: '17:00',
            image: 'https://www.thoughtco.com/thmb/JpBnEUWE4Szf34r-7z0pKoQUPCs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/2000px-Ruby-logo-R.svg-56a811b75f9b58b7d0f05e83.jpg',
            industry: 'Tech',
            hostUser: users[1],
            attendees: [ users[0], users [2], users[3] ]
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
            image: 'https://www.success.com/wp-content/uploads/2016/07/waystotapintoyourcreativeself.jpg',
            hostUser: users[3],
            attendees: [users[4], users[5], users[6]]
          },
          {
            name: 'Clojure Evening for Developers',
            location: 'ThoughtWorks London, 1, 76-78 Wardour St, London W1F 0UR',
            description: 'The goal of the Clojure dojo is to raise the confidence and experience levels of those that attend through practical exercises. These events support those new to Clojure as well as more experienced developers from the London Clojure community.  Suggestions for practical coding challenges are added on http://www.londonclojurians.org/code-dojo/ as we find them and we also have a Github repository https://github.com/ldnclj   Clojure is a JVM language that has syntactically similarities to Lisp, full integration with Java and its libraries and focuses on providing a solution to the issue of single machine concurrency.   Its small core makes it surprisingly easy for Java developers to pick up and it provides a powerful set of concurrency strategies and data structures designed to make immutable data easy to work with.If you went to Rich Hickey’s LJC talk about creating Clojure you’ll already know this, if not it’s well worth watching the Rich Hickey “Clojure for Java Programmers” (http://skillsmatter.com/podcast/java-jee/clojure-for-java-programmers) video or Stuart Halloway “Radical Simplicity” (http://skillsmatter.com/podcast/java-jee/radical-simplicity) video.',
            category: 'Java',
            price: 0,
            date: '2020-07-08',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/03/16/35e584f4-46f3-11e9-b5dc-9921d5eb8a6d_image_hires_194000.JPG?itok=RiqWzzUS&v=1552736407',
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
            image: 'https://www.oracle.com/a/ocom/img/hp11-intl-java-logo.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Solandra Hands-On Tutorial',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: ' Tutorial on Solandra - a simple, modern TypeScript-first algorithmic art tool - James Porter   Talk on Emergent Behaviour In Insects - Alison Rice',
            category: 'Java',
            price: 0,
            date: '2020-11-17',
            time: '19:00',
            industry: 'Agrigulture',
            image: 'https://i.pinimg.com/236x/49/d2/e2/49d2e2c3943b6cb83938f14a7200aead--colorful-feathers-insect-art.jpg',
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
            image: 'http://www.rec.uk.com/news-and-policy/corporate-blog/upload/images/2018%20blog%20images/Diversity---team-work---puzzle.png',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Exponential Decentralized Finance',
            location: '2 Leonard Circus, 62 Paul St, Hackney, London EC2A 4DQ',
            description: 'Lex Sokolin will discuss the macro financial and technological trends that are contributing to the exponential growth in digital assets and decentralized finance.   We have seen DeFi progress across the industry — from payments, to banking, lending and investments.Once there are thousands of decentralized autonomous financial manufacturers, what will be left for financial incumbents, emerging Fintechs and global AI tech companies?   This talk will also connect the dots on how these different services are likely to interact together and how people and companies can benefit from the emerging trend.',
            category: 'Java',
            price: 0,
            date: '2019-05-11',
            time: '19:00',
            industry: 'Finance',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSko2tfsLj9AM8EgrZj2O3nFvWBQSwW_36ASJESZ84mEPsg5hCJ&s',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'The Future of Java and You',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: 'This session will explore how Java development has been brought into the open - several Java developer efforts have brought open source development processes and new levels of transparency and participation into their communities. The Java Community Process (JCP) program celebrates twenty years of Java standards development in 2019. Learn about the latest Java innovations to the Java SE Platform - Java SE 11, 12, 13 and beyond. Since the initiation of efforts to expand the developer participation in the Java community, Java standards development is more open that it ever has been.   Learn how to take part in the Java developer community and the upcoming changes to Java - you can participate as an individual, corporation, or nonprofit such as a Java user group(JUG).This session answers questions about why and how to participate in the evolution of the Java platform.You will also learn about the global Adoption programs and how you can participate in contributing to the future of Java.',
            category: 'Java',
            price: 0,
            date: '2021-04-22',
            time: '19:00',
            industry: 'Tech',
            image: 'https://pbs.twimg.com/profile_images/852650380739592193/oYvdlM7b_400x400.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Craftsmanship Round Table',
            location: 'Codurance, 3 Sutton Lane, EC1M 5PU',
            description: 'This is our monthly Software Craftsmanship round table to discuss technology, practices or whatever else takes our fancy.    If you\'re using some new technology you think others would be interested in, if you\'ve got a design or some code you\'d like to discuss, if you\'d like to discuss a specific practice, a problem you are having at work or you\'d simply like to see what others have got to say - come along and join in the conversation.    How does it work?    The first 15-30 minutes will be devoted to lightning talks.So if you\'ve got a cool demo, some new technology or just something you think the group might find interesting, controversial or just plain funny, bring it along and share with the group! Don\'t worry if you\'ve never given a lightning talk before - this is a great opportunity to give a talk in a friendly environment. We\ll have a projector and a whiteboard and all talks are restricted to no more than five minutes.',
            category: 'Java',
            price: 5,
            date: '2020-12-20',
            time: '19:00',
            industry: 'Tech',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Scala Talks: Daniela Sfregola',
            location: 'CodeNode, 10 South Place, London, EC2M 7EB',
            description: 'Come along to another round of London Scala Talks! This month, we\'ll be hearing from our awesome Daniela Sfregola.We look forward to seeing you!',
            category: 'Java',
            price: 5,
            date: '2020-09-30',
            time: '19:00',
            industry: 'Retail',
            image: 'http://www.duchess-france.org/wp-content/uploads/2017/05/DanielaSfregolaArticle.png',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift - Developing an iOS App',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: 'We return to more technical matters with a look at the programming language Swift and how Apple are pushing the language and it’s developers as, maybe, iPhone and iPad sales slow.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
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
            image: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Intro to Swift',
            location: 'CodeNode, 10 South Place, London, EC2M 7EB',
            description: 'We look at the programming language, Swift and how Apple are pushing the language.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift Monthly October Meetup',
            location: 'Central Station, 37 Wharfdale Road, Kings Cross, London, N1 9UA',
            description: '18:15 - Doors open. Pizza and drinks are served     19: 00 - Building a Serverless API with GraphQL API and Microservicest Christoffer Noring (Microsoft)  This talk introduces technologies such as Serverless, GraphQL and Docker   19: 30 - The time and place for...Implementation Details // Johnny Magrippis (Funding Circle)    `Boolean(v)`, or`!!v` ? React\'s `.setState` or hooks? Interface directly with a Rest API, or through a GraphQL layer? Johnny explores when and where you should be focusing on implementation details such as these... Spoiler alert: it\'s not in your tests.   20: 00 - A Thousand Words: How I\'m still not using GUIs in 2019 // Lucas da Costa (Converge)',
            category: 'Swift',
            price: 0,
            date: '2021-01-30',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Swift - Building an iOS App',
            location: 'SKills Matter, CodeNode, 11 South Pl, Finsbury, London EC2M 7EB',
            description: 'We return to more technical matters with a look at the programming language Swift and how Apple are pushing the language and it’s developers as, maybe, iPhone and iPad sales slow.',
            category: 'Swift',
            price: 5,
            date: '2020-10-30',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.worldvectorlogo.com/logos/swift-logo-with-text.svg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'C++ in London',
            location: 'RecWorks - WeWork Moorgate, 1 Fore St, Barbican, London EC2Y 9DT',
            description: 'C++ is a cross-platformed language that can be used to create sophisticated high-performance applications. C++ was developed by Bjarne Stroustrup at Bell labs in 1979, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory',
            category: 'C++',
            price: 0,
            date: '2019-11-25',
            time: '19:00',
            industry: 'Finance',
            image: 'https://i.redd.it/31b2ii8hchi31.jpg',
            hostUser: users[0],
            attendees: [users[0], users[1], users[2]]
          },
          {
            name: 'Introducing C++',
            location: 'RecWorks - WeWork Moorgate, 1 Fore St, Barbican, London EC2Y 9DT',
            description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms',
            category: 'C++',
            price: 5,
            date: '2019-11-29',
            time: '19:00',
            industry: 'Education',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            hostUser: users[2],
            attendees: [users[0], users[1]]
          },
          {
            name: 'Modern C++',
            location: 'Regus, 1st Floor, 239 Kensington High St, Kensington, London W8 6SN',
            description: 'We often speak about classical and modern C++. What does that mean? First of all: What is modern C++?. There is a simple and a not so simple answer? The simple answer is. Modern C++ stands for C++ that is based on C++11, C++14, and C++17. I guess, you know it. This post and a series of further posts is about the not so simple answer.',
            category: 'C++',
            price: 10,
            date: '2019-12-20',
            time: '21:00',
            industry: 'Education',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            hostUser: users[2],
            attendees: [users[0], users[1]]
          },
          {
            name: 'Compilers in C++',
            location: 'Regus, 1st Floor, 239 Kensington High St, Kensington, London W8 6SN',
            description: 'I recommend that people take Standard conformance very seriously when considering a compiler. If you can, avoid any compiler that doesn\'t closely approximate the ISO standard or fails to supply a solid implementation of the standard library. The recent releases from all the major C++ vendors do that. Most of these compilers are embedded in frameworks of software development tools and libraries. These frameworks, environments, and libraries can be most helpful, but do remember that their use can lock you into a single vendor and that some uses have significant run-time performance implications. When looking for C++ on the web, you find that much of the information is "hidden" under various product names. In fact, I had more luck finding C++ compilers using google.com than by going directly to vendors that I knew sold them. Here, I have chosen to list C++ implementations simply by the name of their provider, ignoring marketing labels.',
            category: 'C++',
            price: 15,
            date: '2019-11-2',
            time: '21:00',
            industry: 'Education',
            image: 'https://images.pexels.com/photos/60626/pexels-photo-60626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            hostUser: users[1],
            attendees: [users[2], users[1]]
          },
          {
            name: 'Javascript in London',
            location: 'wallacespace covent garden, 60 Parker Street, London, WC2B 5PZ',
            description: 'We’ll take a deeper look at how JavaScript is executed. What exactly does a JavaScript engine like V8 do? How does V8 optimize for fast execution and low memory consumption? Using Chrome DevTools we’ll look at some examples of these optimizations, and how to make sure our code is optimizable.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: 'Finance',
            image: 'https://images.unsplash.com/photo-1569025591510-a69144e20084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'SQL in Hackney',
            location: '151 Whiston Rd, London E2 8BL',
            description: 'Hackney is a fast growing borough in London, and we want to connect our developers all in one place! Doors open at 7pm. We’ll take a deeper look at how SQL is executed.',
            category: 'SQL',
            price: 0,
            date: '2019-11-07',
            time: '19:00',
            industry: '',
            image: 'https://cdn4.vectorstock.com/i/1000x1000/33/93/red-grunge-sql-logo-vector-4493393.jpg',
            hostUser: users[5],
            attendees: [users[0], users[4]]
          },
          {
            name: 'JavaScript Monthly',
            location: 'ExCeL, Royal Victoria Dock, 1 Western Gateway, Royal Docks, London E16 1XL',
            description: 'A monthly meeting for all JavaScript enthusiasts. Each month we host an event in the city with speakers from all across the industry.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-07',
            time: '21:00',
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1516635707594-6949bdca3538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10], users[6]]
          },
          {
            name: 'React Meetup',
            location: '107 Cheapside, London EC2V 6DN',
            description: 'Grab a pint, and lets get chatting! A place for all developers to talk React.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-12',
            time: '18:00',
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1519155031214-e8d583928bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
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
            industry: 'Tech',
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
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'London Coders',
            location: '200 Aldersgate St, London, EC1A 4HD',
            description: 'Beer and pizza... and code! The subject of this meetup - JAVASCRIPT. If you\'re interested in this language, or just coding in general.. come down and make an appearance.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-22',
            time: '20:00',
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'JavaScript Reacters',
            location: '1-3 College Hill, London, EC4R 2RA',
            description: 'Beer and pizza... and code! The subject of this meetup - JavaScript & React. If you\'re interested in this language and framework, or just coding in general.. come down and make an appearance.',
            category: 'JavaScript',
            price: 10,
            date: '2019-11-25',
            time: '19:00',
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'Angular London 2019',
            location: '7A Oakley St, Chelsea, London, SW3 5NN',
            description: 'Angular London is the largest Angular meetup in Europe. We hold meetups in various locations in and around London. Our meetup focuses on learning about Angular, sharing knowledge and networking with fellow Angularians.',
            category: 'JavaScript',
            price: 5,
            date: '2019-11-26',
            time: '18:00',
            industry: 'Tech',
            images: 'https://images.unsplash.com/photo-1554200876-29b5f89b3812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'Beginner JS',
            location: 'General Assembly, The Relay Building, 114 Whitechapel High St, Shadwell, London E1 7PT',
            description: 'Interested in programming, specifically the JavaScript language? Come join us at General Assembly London and enjoy an evening of learning with individuals who are just as curious as you.',
            category: 'JavaScript',
            price: 0,
            date: '2019-11-28',
            time: '19:00',
            industry: 'Tech',
            image: 'https://images.unsplash.com/photo-1523575166472-a83a0ed1d522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            hostUser: users[5],
            attendees: [users[0], users[8], users[10]]
          },
          {
            name: 'PHP PHP',
            location: '46 New Broad St, London EC2M 1JH',
            description: 'PHP! If you like the language - sign up now!',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: 'Tech',
            image: 'https://www.techopedia.com/images/uploads/brochure-flyer-paper-poster-logo-trademark-text-building-office-buildi.jpg',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'PHP Elephants',
            location: '16-17 Battle Bridge Ln, London, SE1 2HD',
            description: 'We are PHP fanatics who are crazy about elephants. We\'d like to invite all other like-minded individuals to join us.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: 'Tech',
            image: 'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125',
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
            industry: 'Tech',
            image: 'https://cdn-media-1.freecodecamp.org/ghost/2019/05/laravel2-1.png',
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
            industry: 'Tech',
            image: 'https://betanews.com/wp-content/uploads/2015/02/opensource-e1464708991265.jpg?w=640',
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
            industry: 'Tech',
            image: 'https://hackernoon.com/hn-images/0*YYimU29xUrOcvh8m.',
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
            industry: 'Tech',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41igF8i1yNL._SY450_.jpg',
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
            industry: 'Tech',
            image: 'https://1.bp.blogspot.com/-PVsiTY_P80o/XXI-P17bzYI/AAAAAAAA0_w/QmGHPdewmYo4qrlfiJd_IAKsfuVYmec1gCLcBGAs/s728-e100/php-programming-language.jpg',
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
            industry: 'Tech',
            image: 'https://www.isteducation.com/wp-content/uploads/2018/11/6c978be2ac1f668bd668c4a46a9dbb2c-1.jpg',
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
            industry: 'Tech',
            image: 'https://i0.wp.com/techweez.com/wp-content/uploads/2016/12/PHP-Development.png?resize=607%2C426&ssl=1',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Dictionaries and Laravel',
            location: '31 Brady St, London, E1 5DJ',
            description: 'Party hard with the Laravel Party (no not the film!). We love all things Laravel. Lots of discussions about Laravel and dictionaries at this event! If that sounds fun, why not come and meet the PHP developers using Laravel.',
            category: 'PHP',
            price: 0,
            date: '2019-11-04',
            time: '19:00',
            industry: 'Tech',
            image: 'https://www.techcronus.com/wp-content/uploads/2019/06/Laravel-best-PHP-Framework-1568x1045.jpg',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'SQL Developers in Finance',
            location: 'The Bloomsbury Hotel, 16-22 Great Russell St, Bloomsbury, London WC1B 3NN',
            description: 'Come listen to our SQL Developer panelists at the The Bloomsbury Hotel. They\'ll be discussing their key criteria for hiring developers in the Finance industry. Come and get an insight into how to get your next role as a developer in the Finance industry.',
            category: 'SQL',
            price: 10,
            date: '2019-12-20',
            time: '19:00',
            industry: 'Finance',
            image: 'https://www.neeal.co.uk/wp-content/uploads/2018/10/Finance.jpg',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Cocktail Party for Techies',
            location: 'Bounce Old Street, 241 Old St, Hoxton, London EC1V 9EY',
            description: 'Come grab a cheeky cocktail and enjoy a break from all the coding!',
            category: 'Python',
            price: 0,
            date: '2019-11-19',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg',
            hostUser: users[1],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Developers - End of 2019 Party',
            location: 'The Ivory Vaults, Ivory House, St Katharine Docks, London E1W 1BP',
            description: 'It\'s our end of year party for all developers. Grab your team and enjoy a great night at The Ivory Vaults!',
            category: 'Python',
            price: 10,
            date: '2019-12-22',
            time: '19:00',
            industry: 'Tech',
            image: 'https://cdn.pixabay.com/photo/2018/01/02/20/46/celebration-3057027_1280.jpg',
            hostUser: users[2],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Ruby for Pizza Lovers',
            location: 'The Ivory Vaults, Ivory House, St Katharine Docks, London E1W 1BP',
            description: 'Come grab some pizza with developers passionate about Ruby. A chance to mingle and network with some amazing Ruby developers.',
            category: 'Ruby',
            price: 8,
            date: '2020-01-13',
            time: '18:00',
            industry: 'Tech',
            image: 'https://miro.medium.com/max/5000/1*8FVq3deUltvJmo6qdts5wg.jpeg',
            hostUser: users[0],
            attendees: [ users[1], users [2], users[3] ]
          },
          {
            name: 'Networking for SQL Developers',
            location: 'Puttshack, Westfield, Ariel Way, London W12 7HB',
            description: 'A great opportunity to network with lots of SQL developers in and around London.',
            category: 'SQL',
            price: 0,
            date: '2020-02-24',
            time: '18:30',
            industry: 'Tech',
            image: 'https://insights.dice.com/wp-content/uploads/2019/09/shutterstock_738913864.jpg',
            hostUser: users[3],
            attendees: [ users[1], users [2], users[4] ]
          },
          {
            name: 'Python for Beer Lovers',
            location: 'Puttshack, Westfield, Ariel Way, London W12 7HB',
            description: 'A great opportunity to network with lots of Python developers in and around London. Chill out with some beers and great company.',
            category: 'Python',
            price: 5,
            date: '2020-03-04',
            time: '20:00',
            industry: 'Tech',
            image: 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            hostUser: users[5],
            attendees: [ users[1], users [2], users[3] ]
          },
          {
            name: 'Python in Healthtech',
            location: 'wallacespace covent garden, 60 Parker Street, London, WC2B 5PZ',
            description: 'Come listen to our Python Developer panelists. They\'ll be discussing their key criteria for hiring developers in the HealthTech industry. Come and get an insight into how to get your next role as a developer in this industry.',
            category: 'Python',
            price: 0,
            date: '2020-04-07',
            time: '19:30',
            industry: 'Healthcare',
            image: 'https://s15543.pcdn.co/wp-content/uploads/2018/01/abstract_digitalhealthtools_2-875x404.png',
            hostUser: users[7],
            attendees: [ users[4], users [2], users[3] ]
          },
          {
            name: 'Ruby in Edtech',
            location: 'wallacespace covent garden, 60 Parker Street, London, WC2B 5PZ',
            description: 'Come listen to our Ruby Developer panelists. They\'ll be discussing their key criteria for hiring developers in the EdTech industry. Come and get an insight into how to get your next role as a developer in this industry.',
            category: 'Ruby',
            price: 5,
            date: '2020-01-27',
            time: '18:30',
            industry: 'EdTech',
            images: 'https://miro.medium.com/max/847/1*V5gl6peoDlqXp9jRYpnyfQ.jpeg',
            hostUser: users[4],
            attendees: [ users[5], users [2], users[3] ]
          },
          {
            name: 'Digital Crazy Golf for Techs',
            location: 'Puttshack, Westfield, Ariel Way, London W12 7HB',
            description: 'Try out digital crazy golf with Python developers from all over London. Can you beat them all?',
            category: 'Python',
            price: 5,
            date: '2019-11-01',
            time: '20:00',
            industry: 'Tech',
            images: 'https://static.designmynight.com/uploads/2018/09/Puttshack-Lifestyle-1-Low-Res-optimised.jpg',
            hostUser: users[3],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Ruby Developers - Dance Off 2019',
            location: 'Bounce Old Street, 241 Old St, Hoxton, London EC1V 9EY',
            description: 'Let\'s find out who\'s the best dancer in LondonTown amongst all you Ruby develoeprs?!',
            category: 'Ruby',
            price: 0,
            date: '2020-01-30',
            time: '20:30',
            industry: 'Tech',
            image: 'https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            hostUser: users[5],
            attendees: [ users[0], users [1], users[3] ]
          }           
        ])
      })
    
      .then(events => console.log(`${events.length} events created`)) //# of events created sucessfullly
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  }
)