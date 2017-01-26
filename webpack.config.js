var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './public/client',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}