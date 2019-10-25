/* global describe, beforeEach, afterEach, it, assert, api */

const Event = require('../../models/Event')
const User = require('../../models/User')

describe('PUT /drinks', () => {

  // test users stored in const
  const user1 = {
    username: 'Soph',
    email: 'soph@email',
    password: 'pass',
    passwordConfirmation: 'pass'
  }

  const user2 = {
    username: 'vik',
    email: 'vik@email',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
  
  // before each test create the users and events
  // NOTE: user1 is the host user for all events
  beforeEach(done => {
    
    User
      .create([user1, user2])
      .then( users => {
        return Event.create([
          {
            name: 'Python Masterclass',
            location: 'Shoreditch',
            description: 'How to excel in Python',
            price: '10',
            hostUser: users[0]
          },
          {
            name: 'React for Pizza lovers',
            location: 'Liverpool Street',
            description: 'For the historians out there',
            price: '10',
            hostUser: users[0]
          }
        ])
        
      })
      .then(() => done())
  })

  // at the end of the test remove all data from database
  afterEach(done => {
    User.deleteMany()
      .then(() => Event.deleteMany())
      .then(() => done())
  })
  
  // Test1: login using hostUser (user1) and edit an event
  it('should give a 201 status when hostUser edits', done => {
    api.post('/api/login')
      // send user1 email and password in body
      .send({ email: user1.email, password: user1.password })
      .end((err, loginRes) => {
        // check there's a valid token and login is successful
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne()
          // find the first event in the DB and try to edit it's price
          .then(event => {
            api.put(`/api/events/${event._id}`)
              .send({ price: 5 })
              .set('Authorization','Bearer ' + token)
              .end((err, res) => {
                assert.equal(res.status, 202, 'Incorrect status')
                done()
              })
          })
      })
  })

  // Test2: login with user2, who should not be allowed to edit, so expect 401
  it('only the hostUser should be able to edit, expect 401', done => {
    api.post('/api/login')
      .send({ email: user2.email, password: user2.password })
      .end((err, loginRes) => {
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne()
          .then(event => {
            api.put(`/api/events/${event._id}`)
              .send({ price: 5 })
              .set('Authorization','Bearer ' + token)
              .end((err, res) => {
                assert.equal(res.status, 401, 'Edit was successful but not expected')
                done()
              })
          })
      })
  })

  it('should be able to edit fields successfully', done => {
    api.post('/api/login')
      .send({ email: user1.email, password: user1.password })
      .end((err, loginRes) => {
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne({ location: 'Shoreditch' })
          .then(event => {
            api.put(`/api/events/${event._id}`)
              .send({ location: 'Monument' })
              .set('Authorization','Bearer ' + token)
              .end((err, res) => {
                assert.equal(res.status, 202, 'Edit was not successful')
                assert.equal(res.body.location, 'Monument', 'Location value not changed after edit')
                done()
              })
          })
      })
  })
})