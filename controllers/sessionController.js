const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/User')

const session = express.Router()

// Login
session.post('/', (req, res) => {
  const errors = []
  if (req.body.username === undefined || req.body.password === undefined) {
    errors.push({ EmptyFieldError: 'Please fill all fields.' })
    res.json(errors)
  }
  User.findOne({ email: req.body.email }, (error, foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      res.json(foundUser)
    } else {
      errors.push({
        InvalidInputsError: 'Username/email or password is incorrect.'
      })
    }
  })
})

// Logout
session.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Logged out' })
  })
})
