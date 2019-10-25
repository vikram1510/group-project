/* global describe, beforeEach, afterEach, it, expect, api */
const Drink = require('../../models/Drink')
const User = require('../../models/User')

describe('GET /drinks', () => {
  beforeEach(done => {
    User.create({
      username: 'vik',
      email: 'vik',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        return Drink.create([
          {
            name: 'oreo milkshake',
            description: 'delicious mmmmmmmmmmmmmmmmm',
            isAlcoholic: false,
            hydrationLevel: 35,
            ingredients: ['sugar', 'oreo', 'milk', 'shake'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UG80ZPUsljxb_3XBTzyGYo1PS6BTorxQIxOiU7Us40PNNkRzMg',
            user: user
          },
          {
            name: 'lemon ice tea',
            description: 'sweet and still',
            isAlcoholic: false,
            hydrationLevel: 50,
            ingredients: ['lemon', 'ice', 'tea'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSS_Jns70WsRO_Tw-BEdMmWs7YuZcw7YJyeVwAsZUaPBD4dJU3A',
            user: user
          }
        ])
      })
      .then(() => done())
  })
  afterEach(done => {
    User.remove({})
      .then(() => Drink.remove({}))
      .then(() => done())
  })
  it('should return a 200 response', done => {
    api.get('/api/drinks')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })
  it('should return an array', done => {
    api.get('/api/drinks')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })
  it('should return an array of objects', done => {
    api.get('/api/drinks')
      .end((err, res) => {
        res.body.forEach(drink => {
          expect(drink).to.be.an('object')
        })
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get('/api/drinks')
      .end((err, res) => {
        res.body.forEach(drink => {
          expect(drink).to.contains.keys('_id', 'name', 'isAlcoholic', 'description', 'ingredients', 'image')
        })
        done()
      })
  })
})
Collapse








Message Vikram Bageja, Reema Patel - LDN, Tom Good


