/* global describe, beforeEach, afterEach, it, expect, api */

const Event = require('../../models/Event')
const User = require('../../models/User')

describe('GET /events', () => {
  beforeEach(done => {
    User.create({
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
    })
      .then(users => {
        return Event.create([
          {
            name: 'Javascript History',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '5',
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
          },
          {
            name: 'Python Masterclass',
            location: 'Shoreditch',
            description: 'How to excel in Python',
            price: '10'
          }
        ])
      })
      .then(() => done())
  })
  afterEach(done => {
    User.deleteMany()
      .then(()=> Event.deleteMany())
      .then(() => done())
  })

  // test for a 200 response
  it('should return a 200 response', done => {
    api.get('/events')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })
})