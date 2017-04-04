'use strict'

import path from 'path'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// const path = require('path')
const publicPath = path.resolve(__dirname, './src/client')

module.exports = {
  devtool: '#source-maps',
  performance: {
    hints: false
  },
  context: publicPath,
  entry: {
    bundle: './app.js'
  },
  output: {
    path: path.join(publicPath, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ejs']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'stage-0'] }
        }]
      }
    ]
  }
}
