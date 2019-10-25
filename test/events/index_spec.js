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
    api.get('/api/events')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  // test for an array response
  it('should return an array', done => {
    api.get('/api/events')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  // test for an array of objects response
  it('should return an array of objects', done => {
    api.get('/api/events')
      .end((err, res) => {
        res.body.forEach(event => {
          expect(event).to.be.an('object')
        })
        done()
      })
  })

  // test for correct fields in response - for required fields
  it('should return the correct fields', done => {
    api.get('/api/events')
      .end((err, res) => {
        res.body.forEach(event => {
          expect(event).to.contains.keys([
            '_id',
            'name',
            'location',
            'description',
            'price'
          ])
        })
        done()
      })
  })

  // test for correct data types in field - for required fields
  it('should return the correct data types within fields', done => {
    api.get('/api/events')
      .end((err, res) => {
        res.body.forEach(event => {
          expect(event._id).to.be.a('string')
          expect(event.name).to.be.a('string')
          expect(event.location).to.be.a('string')
          expect(event.description).to.be.a('string')
          expect(event.price).to.be.a('number')
        })
        done()
      })
  })

})