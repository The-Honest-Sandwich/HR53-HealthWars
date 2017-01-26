var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
    },
  team: {
    type: String,
    required: false
  },
  scores: {
    type: [Number]
  }

})

module.exports = mongoose.model( 'User', userSchema);