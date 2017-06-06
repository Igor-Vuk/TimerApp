/* @flow */

import Express from 'express'
import path from 'path'

const isProd: boolean = process.env.NODE_ENV === 'production'
const prodConf: Object = isProd ? require('../../conf/app.json') : {}

const conf: Object = {
  ...prodConf
}

const APP_PORT: number = conf.APP_PORT
const PORT: any = process.env.PORT || APP_PORT

const app: Express = new Express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* In development serve static files from memory */
// if (process.env.NODE_ENV === 'development') {
//   const webpack = require('webpack')
//   const webpackConfig = require('../../webpack.config.js').default
//   const compiler = webpack(webpackConfig)
//   const webpackDevMiddleware = require('webpack-dev-middleware')

//   app.use(webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     hot: true,
//     noInfo: true,
//     stats: {
//       colors: true
//     }
//   }))

//   app.use(require('webpack-hot-middleware')(compiler))
// } else {
//   /* In production serve physical static files bundled by webpack */
//   app.use(Express.static(path.join(__dirname, '../', 'dist')))
// }

app.use(Express.static(path.join(__dirname, '../', 'dist')))

/* In production use server side rendering for first load */
if (process.env.NODE_ENV === 'production') {
  const appRenderer = require('./appRenderer').default
  app.use(appRenderer)
}

// Routes
app.get('*', (req: Object, res: Object) => {
  res.render('index', {app: req.body, proba: 'asdfasdf222324534534533333'})
})

if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => {
    console.log(`Express server is up on port ${PORT}`)
  })
}

export default app
















