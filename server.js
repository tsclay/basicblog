// Requirements and Express app
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const userController = require('./controllers/userController')
const sessionController = require('./controllers/sessionController')
const blogController = require('./controllers/blogController')

const app = express()

//==================================================
// Config Server and Mongo DB ports
require('dotenv').config()

const PORT = process.env.PORT || 3005
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bloggert'

//==================================================
// Middlewares
app.use(
  session({
    secret: process.env.SECRET || 'hiimpaul',
    resave: false,
    saveUninitialized: false
  })
)
app.use(express.json())
app.use(express.static('public'))
// app.use('/users', userController)
// app.use('/session', sessionController)
// app.use('/blog', blogController)

//==================================================
// Listeners
mongoose.connect(
  MONGO_URI,
  {
    useCreateIndex: false,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log(`MONGO @ ${MONGO_URI}`)
  }
)

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
})
