var webpackConfig = require('../webpack.config');
var webpack = require('webpack');
var express = require('express');
var path = require('path');
var app = express();

var compiler = webpack(webpackConfig);
var app = express();


app.use(require("webpack-hot-middleware")(compiler));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(express.static('public'));

// ================================
// DATA API ENDPOINT ROUTING
// ================================

// Controller Dependencies

var userController = require('./dbmodules/users/userController');
var roundController = require('./dbmodules/rounds/roundController');
var exerciseController = require('./dbmodules/exercises/exerciseController');
var achievementController = require('./dbmodules/achievement/achievementController');

// Get all users
app.get('/api/users', userController.getUsers);

// Add a new user
app.post('/api/users', userController.newUser);


app.post('/submitUnits', function(req, res) {
  console.log('POST request received on url submitUnits')
  res.end('');
});

module.exports = app;