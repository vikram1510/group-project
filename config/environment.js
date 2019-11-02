const env = process.env.NODE_ENV || 'development'

const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/group-project-${env}`
const secret = process.env.SECRET || 'I am a yogabunny said vikram'

module.exports = { port, dbURI, secret }