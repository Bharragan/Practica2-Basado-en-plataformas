const mongoose = require('mongoose');
const { Schema } = mongoose;
const Book = require('./book');

const userSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  faculty: {
    type: String,
    required: true
  },
  reservas: [{
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    reserved_at: {
      type: Date,
      default: Date.now
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
