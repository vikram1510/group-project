const faker = require('faker')

const randomName = faker.name.findName() // Rowan Nikolaus
const randomEmail = faker.internet.email() // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard() // random contact card containing many properties

// console.log(randomName)
// console.log(randomEmail)
// console.log(randomCard)
// console.log(faker.image.avatar())
const users = []

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
// const user = {
//   username: faker.helpers.createCard().username,

  
// }

// for (i=0; i <= 20; i++) {
//   randomName + ' ' + 
// }