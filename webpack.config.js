'use strict'

const path = require('path')
const webpack = require('webpack')
/*const BrowserSyncPlugin = require('browser-sync-webpack-plugin')*/
const publicPath = path.resolve(__dirname, './src/client')
const buildPath = path.resolve(__dirname, './src')

process.noDeprecation = true

module.exports = {
  devtool: 'source-maps',
  performance: {
    hints: false
  },
  devServer: {
    hot: true,
    port: 3001,
    host: 'localhost',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  },
  context: publicPath,
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!tether/dist/js/tether.min.js',
      'script-loader!bootstrap/dist/js/bootstrap.min.js',
      './app.js'
    ]
  },
  output: {
    path: path.join(buildPath, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3001/'
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist/,
        loader: 'babel-loader',
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
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
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
        test: /^((?!\.local).)+\.(css|scss)$/,
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
    /* For Browser. Browsersync will not send any file-change events to browser and webpack-hot-middleware will hot reload */
    /*new BrowserSyncPlugin({
      host: 'localhost',
      port: 3006,
      ui: {
        port: 3005
      },
      proxy: {
        target: 'http://localhost:3001/'
      },
      codeSync: false,
      open: false,
      reload: false,
      injectChanges: false
    })*/
    // /* For Mobile. Browsersync will refresh the page on every change instead of hot reload */
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 3004,
    //   ui: {
    //     port: 3003
    //   },
    //   proxy: 'http://localhost:3000/',
    //   codeSync: true,
    //   open: false,
    //   injectChanges: false
    // })
  ]
}
