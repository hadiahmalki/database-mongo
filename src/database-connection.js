const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))

const Panda = mongoose.model('Panda', { name: String, age: Number })

const panda = new Panda({ name: 'jenna', age: 5 })

panda.save().then(() => console.log(`We have a new Panda , ${panda.name}!`))
