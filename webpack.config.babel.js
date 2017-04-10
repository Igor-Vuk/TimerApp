'use strict'

import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
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
        test: /\.global\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './src/client/styles/global/sass-resources.scss')
            }
          }
        ]
      },
      {
        test: /^((?!\.global).)+\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      postcss: [autoprefixer]
    })
  ]
}
