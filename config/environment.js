const env = process.env.NODE_ENV || 'development'

const port = 4000
const dbURI = 'mongodb://localhost/group-project'
const secret = 'I am a yogabunny said vikram'

module.exports = { port, dbURI, secret }