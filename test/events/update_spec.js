/* global describe, beforeEach, afterEach, it, expect, assert, api */

const Event = require('../../models/Event')
const User = require('../../models/User')

describe('PUT /drinks', () => {
  const user = {
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
  
  beforeEach(done => {
    
    User
      .create([user, user2])
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

  afterEach(done => {
    User.deleteMany()
      .then(() => Event.deleteMany())
      .then(() => done())
  })
  
  it('should give a 201 status', done => {
    api.post('/login')
      .send({ email: user.email, password: user.password })
      .end((err, loginRes) => {
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne()
          .then(event => {
            api.put(`/events/${event._id}`)
              .send({ price: 5 })
              .set('Authorization','Bearer ' + token)
              .end((err, res) => {
                assert.equal(res.status, 202, 'Incorrect status')
                done()
              })
          })
      })
  })

  it('only the hostUser should be able to edit, expect 401', done => {
    api.post('/login')
      .send({ email: user2.email, password: user.password })
      .end((err, loginRes) => {
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne()
          .then(event => {
            api.put(`/events/${event._id}`)
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
    api.post('/login')
      .send({ email: user.email, password: user.password })
      .end((err, loginRes) => {
        const token = loginRes.body.token
        assert.equal(loginRes.status, 202, 'Login Failed')
        assert.typeOf(token, 'string', 'Token not found')
        Event.findOne({ location: 'Shoreditch' })
          .then(event => {
            api.put(`/events/${event._id}`)
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