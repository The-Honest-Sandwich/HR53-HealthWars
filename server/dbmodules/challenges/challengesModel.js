var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema({

  user: {
    type: String,
    required: true
  },

  invited: {
    type: Array,
    required: true
  },

  exercise: {
    type: String,
    required: false
  },

  time: {
    type: Date,
    required: false
  },

  location: {
    type: String,
    required: false
  }
  
});

module.exports = mongoose.model( 'Challenge', challengeSchema);