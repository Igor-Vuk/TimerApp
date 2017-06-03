const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './src/server/server'
  ],
  devServer: {
    hot: true,
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  watch: true,
  target: 'node',
 /* node: {
    __dirname: true,
    __filename: true
  },
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            'react',
            ['es2015', { 'modules': false }],
            'stage-0'
          ]
        }
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  },
  plugins: [
    /*new StartServerPlugin('server.js'),*/
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
    })/*,
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3004,
      ui: {
        port: 3003
      },
      proxy: 'http://localhost:3000/',
      codeSync: true,
      open: false,
      injectChanges: true
    })*/
  ],
  output: {
    path: path.join(__dirname, 'src', 'build'),
    filename: 'server.js',
    publicPath: 'http://localhost:3000/'
  }
}
