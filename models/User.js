const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

const User = mongoose.model('User', UserSchema)

module.exports = User
