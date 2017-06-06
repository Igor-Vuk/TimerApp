'use strict'

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = path.resolve(__dirname, './src/client')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
/*const BrowserSyncPlugin = require('browser-sync-webpack-plugin')*/

process.noDeprecation = true

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  watch: true,
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    bundle: [
      'webpack/hot/poll?1000',
      './src/server/devServer'
    ]
  },
  output: {
    path: path.join(__dirname, 'src', 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      CountdownForm: path.resolve(__dirname, 'src/client/scenes/countdown/components/CountdownForm.jsx'),
      Countdown: path.resolve(__dirname, 'src/client/scenes/countdown/index.jsx'),
      Clock: path.resolve(__dirname, 'src/client/scenes/shared/clock/index.jsx'),
      Controls: path.resolve(__dirname, 'src/client/scenes/shared/controls/index.jsx'),
      Navigation: path.resolve(__dirname, 'src/client/scenes/shared/navigation/index.jsx'),
      Timer: path.resolve(__dirname, 'src/client/scenes/timer/index.jsx'),
      Container: path.resolve(__dirname, 'src/client/scenes/Container.js')
    }
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules|dist|build/,
        options: {
          plugins: [
            [
              'babel-plugin-react-css-modules',
              {
                context: publicPath,
                filetypes: {
                  '.scss': 'postcss-scss'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.local\.(css|scss)$/,
        use: [
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new StartServerPlugin('bundle.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Timer',
      template: 'ejs-loader!./src/server/views/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
    /*
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3004,
      ui: {
        port: 3003
      },
      proxy: 'http://localhost:3000/',
      codeSync: true,
      open: false,
      injectChanges: false
    })*/
  ]
}
