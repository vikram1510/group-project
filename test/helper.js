process.env.NODE_ENV = 'test'

const chai = require('chai')

global.expect = chai.expect
global.assert = chai.assert

const supertest = require('supertest')

const app = require('../index')

global.api = supertest(app)