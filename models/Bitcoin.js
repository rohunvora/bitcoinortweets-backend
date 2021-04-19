const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Float = require('mongoose-float').loadType(mongoose, 2)

const BitcoinSchema = new Schema({
  bitcoinPrice: {
    type: Float
  },
  year: {
    type: Number,
  },
  monthYear: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = Bitcoin = mongoose.model('Bitcoin',  BitcoinSchema)
