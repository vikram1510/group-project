/* global describe, beforeEach, afterEach, it, expect, api */
const Event = require('../../models/Event')
const User = require('../../models/User')

// >>>TESTS TO ADD<<<
//test industry when we have the dropdowns complete


describe('GET /events/:id', () => {
  beforeEach(done => {
    User.create([{
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
    }])
      .then(users => {
        return Event.create([
          {
            name: 'Javascript History',
            location: 'CM12 0LL',
            description: 'For the historians out there',
            price: 5,
            category: 'JavaScript',
            date: '2022-12-09',
            time: '19:00',
            images: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/computers-text-matrix-computer-code.jpg',
            industry: '',
            comments: [],
            hostUser: users[0],
            attendees: [ users[0], users [1], users[2] ]
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

  it('should return a 200 status', done => {
    Event.find()
      .then(event => {
        api.get(`/api/events/${event[0]._id}`)
          .end((err, res) => {
            expect(res.status).to.eq(200)
            done()
          })
      })
  })

  it('should have the following keys', done => {
    Event
      .find()
      .then(event => {
        api.get(`/api/events/${event[0]._id}`)
          .end((err, res) => {
            expect(res.body).to.contain.keys([
              '_id',
              'name',
              'location',
              'description',
              'price',
              'category',
              'date',
              'time',
              'images',
              'industry',
              'comments',
              'hostUser',
              'attendees'
            ])
            done()
          })
      })
  })
})