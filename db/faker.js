var faker = require('faker')

const randomName = faker.name.findName() // Rowan Nikolaus
const randomEmail = faker.internet.email() // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard() // random contact card containing many properties

console.log(randomName)
console.log(randomEmail)
console.log(randomCard)

const user = {
  username: faker.helpers.createCard().username,

  
}

for (i=0; i <= 20; i++) {
  randomName + ' ' + 
}