/*eslint-env node*/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',
        use: [ 'css-loader', 'sass-loader' ]})
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'app/index.html' }),
    new ExtractTextPlugin('index.css')
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
