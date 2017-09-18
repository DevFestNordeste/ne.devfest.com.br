const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devtool = 'source-map';
const autoprefixer = require('autoprefixer');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolve = config.resolve;
const rules = config.module.rules;
rules.find(
  rule => String(rule.test) === String(/\.scss$/)
).loader = ExtractTextPlugin.extract(['css-loader?minimize', 'postcss-loader', 'sass-loader'])

module.exports = {
  entry: config.entry,
  output: config.output,
  resolve: resolve,
  devtool: devtool,
  module: {
    rules: rules
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
     new webpack.optimize.UglifyJsPlugin({
      sourceMap: devtool && (devtool.indexOf('sourcemap') >= 0 || devtool.indexOf('source-map') >= 0)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    })
  ]
}