const { dbURI, port } = require('./config/environment')

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./config/router')
const bodyParser = require('body-parser')

const logger = require('./lib/logger')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

// need to yarn add body-parser and need to hook it up here
app.use(bodyParser.json())

app.use(logger)

app.use(router)



app.listen(port, () => console.log(`Listening on port ${port}`))


module.exports = app