import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/server/server'
  ],
  watch: true,
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React Timer',
      template: 'ejs-loader!./src/server/views/index.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'React Timer2',
      template: 'ejs-loader!./src/server/views/proba.ejs'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3006,
      ui: {
        port: 3005
      },
      proxy: 'http://localhost:3000/',
      codeSync: true,
      open: false
    })
  ],
  output: {
    path: path.join(__dirname, 'src', 'build'),
    filename: 'server.js'
  }
}
