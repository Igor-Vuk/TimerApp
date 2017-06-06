/* @flow */

import http from 'http'
import app from './index'

const isDev: boolean = process.env.NODE_ENV === 'development'
const localConf: Object = isDev ? require('../../conf/app.local.json') : {}

const conf: Object = {
  ...localConf
}

const PORT: number = conf.APP_PORT

const server = http.createServer(app)
let currentApp = app
server.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`)
})

if (module.hot) {
  module.hot.accept('./index', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
