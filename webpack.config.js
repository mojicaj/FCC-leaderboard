/*eslint-env node*/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })] //, new ExtractTextPlugin('index.css')
};

// to export css into external file for production
//test: /\.scss$/, use: ExtractTextPlugin.extract([ 'style-loader', 'css-loader', 'sass-loader' ])
