var mongoose = require('mongoose');

var achievementSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  }
  
});

module.exports = mongoose.model( 'Achievement', achievementSchema);