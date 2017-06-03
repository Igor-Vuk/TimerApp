 import http from 'http'
 import app from './index'

 const server = http.createServer(app)
 let currentApp = app
 server.listen(3000)

 if (module.hot) {
   module.hot.accept('./index', () => {
     server.removeListener('request', currentApp)
     server.on('request', app)
     currentApp = require('./index').default
   })
 }
