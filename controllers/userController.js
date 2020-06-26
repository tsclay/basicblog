const express = require('express')
const User = require('../models/User')

const user = express.Router()

// Register new user
user.post('/', async (req, res) => {
  const newUser = await User.create(req.body)
  res.json(newUser)
})

// Update user details
user.put('/:userId', async (req, res) => {
  const update = await User.findByIdAndUpdate(req.params.userId, req.body)
  res.json(update)
})

// Delete user account
user.delete('/:userId', async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.userId)
  res.json(deleted)
})
