var app = require('./route');
var mongoose = require('mongoose');

var port = 3000;

app.listen(port, function() {
  console.log('Listening on port', port);
});

mongoose.connect('mongodb://localhost/healthwars');