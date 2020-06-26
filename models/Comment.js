const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema(
  {
    author: {
      name: { type: String, required: true },
      id: { type: String, required: true }
    },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

const Comment = mongoose.model('User', CommentSchema)

module.exports = Comment
