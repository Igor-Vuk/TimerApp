/* @flow */

import Express from 'express'
import path from 'path'
import fs from 'fs'
import conf from './conf'
import appRenderer from './appRenderer'
import webpackUtils from './webpackUtils'
import expressStaticGzip from 'express-static-gzip'

const APP_PORT: number = conf.APP_PORT

const PORT: any = process.env.PORT || APP_PORT
const NGINX_PORT = process.env.HEROKU ? '/tmp/nginx.socket' : PORT
const app: Express = new Express()
process.env.PWD = process.cwd()

app.set('view engine', 'ejs')

// app.set('views', path.join(__dirname, 'views'))
app.set('views', path.join(process.env.PWD + '/src/server/views'))

/* set max-age to '1y' (maximum) or 31536000 for client static assets */
/* request for "/" or "<somepath>/" will now serve index.html as compressed version. If we dont want this add indexFromEmptyFile false  */
// app.use(expressStaticGzip(path.join(__dirname, '../', 'dist'), {indexFromEmptyFile: false, maxAge: '1y'}))
// app.use(expressStaticGzip(path.join(process.env.PWD + '/src/dist'), {indexFromEmptyFile: false, enableBrotli: true, maxAge: '1y'}))
// app.use(Express.static(path.join(__dirname, '../', 'dist'), {maxAge: '1y'}))
app.use(Express.static(path.join(process.env.PWD + '/src/dist'), {maxAge: '1y'}))

/* check with the server before using the cached resource */
app.use((req: Object, res: Object, next: () => void): void => {
  res.set('Cache-Control', 'no-cache')
  return next()
})

/* Use server side rendering for first load */
app.use(appRenderer)

/* Use CommonChunks and long term caching */
app.use(webpackUtils)

// Routes
app.get('*', (req: Object, res: Object) => {
  res.render('index', {app: req.body, webpack: req.chunk})
})

app.listen(NGINX_PORT, () => {
  if (process.env.DYNO) {
    console.log('This is on Heroku..!!')
    fs.openSync('/tmp/app-initialized', 'w')
  }
  console.log('Node server started on')
})
