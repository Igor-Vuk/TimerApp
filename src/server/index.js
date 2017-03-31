/* @flow */

import Express from 'express'
import path from 'path'
import conf from '../conf/'

const APP_PORT: number = conf.APP_PORT
const app: Express = new Express()

// Middleware
app.use(Express.static(path.join(__dirname, 'views')))

// Routes
app.get('*', function (req: Object, res: Object) {
  res.send('Express route')
})

app.listen(APP_PORT, function () {
  console.log(`Express server is up on port ${APP_PORT}`)
})
