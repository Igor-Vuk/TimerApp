'use strict'

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssPath = path.resolve(__dirname, './src/client')
const buildPath = path.resolve(__dirname, './src')

/*const CompressionPlugin = require('compression-webpack-plugin')*/

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    bundle: './src/server/prodServer.js'
  },
  output: {
    path: path.join(buildPath, 'build'),
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
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules|dist|build/,
        options: {
          babelrc: false,
          presets: [
            'react',
            ['es2015', { 'modules': false }],
            'stage-0'
          ],
          plugins: [
            'transform-runtime',
            [
              'babel-plugin-react-css-modules',
              {
                context: postcssPath,
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
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader?limit=25000&emitFile=false&name=assets/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'ejs-loader!./src/server/views/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
    /*,
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|ejs)$/,
      threshold: 10240,
      minRatio: 0.8
    })*/
  ]
}
