/* @flow */

import Express from 'express'
import path from 'path'
import conf from './conf'
import appRenderer from './appRenderer'
import webpackUtils from './webpackUtils'
/*var expressStaticGzip = require('express-static-gzip')*/

const APP_PORT: number = conf.APP_PORT
const PORT: any = process.env.PORT || APP_PORT

const app: Express = new Express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* set max-age to '1y' (maximum) or 31536000 for client static assets */
/*app.use(expressStaticGzip(path.join(__dirname, '../', 'dist'), {indexFromEmptyFile: false, maxAge: '1y'}))*/
app.use(Express.static(path.join(__dirname, '../', 'dist'), {maxAge: '1y'}))

/* check with the server before using the cached resource */
app.use((req: Object, res: Object, next: () => void): void => {
  res.set('Cache-Control', 'no-cache')
  return next()
})

/* Use server side rendering for first load */
// app.use(appRenderer)

/* Use CommonChunks and long term caching */
app.use(webpackUtils)

// Routes
app.get('*', (req: Object, res: Object) => {
  // res.set('Content-Encoding', 'gzip')
  res.render('index', {app: req.body, webpack: req.chunk})
})

app.listen(process.env.PORT, () => {
  console.log(`
  Express server is up on port ${PORT}
  Production environment
  `)
})
