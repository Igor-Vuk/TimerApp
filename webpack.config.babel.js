'use strict'

import path from 'path'
import webpack from 'webpack'
const publicPath = path.resolve(__dirname, './src/client')

module.exports = {
  devtool: '#source-maps',
  performance: {
    hints: false
  },
  context: publicPath,
  entry: {
    bundle: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!tether/dist/js/tether.min.js',
      'script-loader!bootstrap/dist/js/bootstrap.min.js',
      './app.js'
    ]
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
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    })
  ]
}
