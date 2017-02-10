var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  team: {
    type: String,
    required: false
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  scores: {
    type: [Number]
  },

  challenges: {
    type: [String]
  }

});

module.exports = mongoose.model( 'User', userSchema);