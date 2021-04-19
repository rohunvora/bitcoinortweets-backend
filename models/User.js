const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user_handle: {
    type: String,
    required: true,
  },
  saved_tweets: [{
    type: mongoose.Schema.Types.ObjectId
  }],
  date: {
  type: Date,
  default: Date.now()
  }
})

module.exports = User = mongoose.model('User',  UserSchema)
