var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  unit: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: false
  }
  
});

module.exports = mongoose.model( 'Exercise', exerciseSchema);