var mongoose = require('mongoose');

var roundSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  
  exercise: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model( 'Round', roundSchema);