# IN DEVELOPMENT #

# TimerApp #

## React Countdown and Timer App ##


## Inital Setup Features##
* ES6
* Babel
* Webpack
* Express
* Flow.js
* ESLint
* standard.js
* EJS
* yarn.lock
* .editorconfig




### Run the app ###
* **_To start the app_** run `yarn run webpack` and `yarn run start-dev`

* `yarn run start-dev` will set NODE_ENV = development and start nodemon. Be sure to make **app.local.json** inside the **conf** folder and designate your *APP_PORT* just like in **app.json**
* `yarn run clean-client/build-client` will bundle client using webpack
* `yarn run clean-server/build-server` will bundle server using babel
* `yarn run start` will run in production (build the client and server before runing it)
* `yarn run webpack` will start webpack in watch mode
* `yarn run flow` will run flow check
* `yarn run standard` will check standard.js
