const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  handle: {
    type: String,
    required: true.valueOf,
  },
  tweets: [{
    type: mongoose.Schema.Types.ObjectId
  }],
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = Author = mongoose.model('Author',  AuthorSchema)
