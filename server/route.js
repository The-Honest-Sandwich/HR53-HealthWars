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

app.get('/user')

// app.get('/', function(req, res) {
//   res.send('Hello!');
// })

module.exports = app;