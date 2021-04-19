const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Float = require('mongoose-float').loadType(mongoose, 2)

const TweetSchema = new Schema({
  dateTweeted: {
    type: Date,
    required: true,
  },
  authorHandle: {
    type: String,
    required: true,
  },
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userHandle: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  tweetContent: {
    type: String,
    required: true,
  },
  tweetURL: {
    type: String,
    required: true,
  },
  tweetURLID: {
    type: String,
  },
  likes: {
    type: Number,
  },
  bitcoinPrice: {
    type: Float,
  },
  dateAdded: {
    type: Date,
    default: Date.now()
  },
})

module.exports = Tweet = mongoose.model('Tweet',  TweetSchema)
