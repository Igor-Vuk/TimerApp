/* @flow */

import Express from 'express'
import path from 'path'
import fs from 'fs'
import appRenderer from './appRenderer'
import webpackUtils from './webpackUtils'
import expressStaticGzip from 'express-static-gzip'

/* If we set env variable on Heroku, NGINX_HEROKU=true then use NGINX. Deploy app according to this instructions <https://www.nodebeats.com/documentation/configuring-nginx-on-heroku> Drag Procfile file from herokuProcfile folder to root of the app. */
const PORT = process.env.NGINX_PORT ? '/tmp/nginx.socket' : process.env.PORT
const app: Express = new Express()
process.env.PWD = process.cwd()

// app.set('views', path.join(__dirname, '../', 'build', 'views'))
app.set('views', path.join(process.env.PWD + '/src/build/views'))
app.set('view engine', 'ejs')

// app.use(expressStaticGzip(path.join(__dirname, '../', 'dist'), {indexFromEmptyFile: false, maxAge: '1y'}))
// app.use(expressStaticGzip(path.join(process.env.PWD + '/src/dist'), {indexFromEmptyFile: false, enableBrotli: true, maxAge: '1y'}))
// app.use(Express.static(path.join(__dirname, '../', 'dist'), {maxAge: '1y'}))
// app.use(Express.static(path.join(process.env.PWD + '/src/dist'), {maxAge: '1y'}))


  /* set max-age to '1y' (maximum) or 31536000 for client static assets  */
  /* request for "/" or "<somepath>/" will now serve index.html as compressed version. If we dont want this add indexFromEmptyFile false  */
  /* If we enable brotli we must also enable it in webpackUtils.config.prod.js */
  app.use(expressStaticGzip(path.join(process.env.PWD + '/src/dist'), {indexFromEmptyFile: false, enableBrotli: false, maxAge: '1y'}))
if (!process.env.NGINX_PORT) {
  /* check with the server before using the cached resource */
  app.use((req: Object, res: Object, next: () => void): void => {
    res.set('Cache-Control', 'no-cache')
    return next()
  })
}

/* Use server side rendering for first load */
app.use(appRenderer)

/* Use CommonChunks and long term caching */
app.use(webpackUtils)

// Routes
app.get('*', (req: Object, res: Object) => {
  res.render('index', {app: req.body, webpack: req.chunk})
})

app.listen(PORT, () => {
  if (process.env.NGINX_PORT) {
    console.log('Running with Nginx on Heroku..!!')
    fs.openSync('/tmp/app-initialized', 'w')
  }
  console.log(`Node server is listening on port ${PORT}`)
})
