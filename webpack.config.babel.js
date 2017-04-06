'use strict'

import path from 'path'
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
    extensions: ['.js', '.jsx'],
    alias: {
      Container: path.resolve(__dirname, 'src/client/scenes/Container.js'),
      First: path.resolve(__dirname, 'src/client/scenes/first/First.jsx')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist/,
        loader: 'babel-loader'
      }
    ]
  }
}
