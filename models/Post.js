const mongoose = require('mongoose')

const { Schema } = mongoose

const PostSchema = new Schema(
  {
    author: {
      name: { type: String, required: true },
      id: { type: String, required: true }
    },
    content: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
