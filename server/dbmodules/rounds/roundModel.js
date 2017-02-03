var mongoose = require('mongoose');

var roundSchema = new mongoose.Schema({

  name: { // i.e. 'Week 1' or '12/05/17 - 12/12/17'
    type: String,
    required: true
  },
  
  exercise: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model( 'Round', roundSchema);