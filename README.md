# IN DEVELOPMENT #

# TimerApp #

## React Countdown and Timer App ##


## Inital Setup Features##
* ES6
* Babel
* Bootstrap 4 & Mixins
* CSS Modules
* Webpack (development & production mode)
* Express
* EJS
* Flow.js
* ESLint
* standard.js
* yarn.lock
* .editorconfig




### Run the app ###

* run `yarn` or `yarn install` to install all npm paskages

* Make **app.local.json** inside the **conf** folder 
* Copy the settings from **app.json** and change them to your preference
* If you run the app in **production** mode, settings from **app.json** will be used 
* If you run the app in **development** mode, settings from **app.local.json** will be used 

**BEFORE PRODUCTION**
* `yarn run clean-client` will delete client bundle `build`
* `yarn run clean-server` will delete server bundle `dist`

**IN PRODUCTION**
* `yarn run build-server`  will bundle server for production using `babel` and make a `build` folder
* `yarn run build-client` will bundle client for production using `webpack` and make a `dist` folder
* `yarn run start` set NODE_ENV = production and start the app (build server and client first)

**IN DEVELOPMENT**
* `yarn run start-dev` will set NODE_ENV = development and start `nodemon`
* `yarn run webpack` will start webpack in `watch mode` and bundle the client in development mode in `dist` folder

**HELPE SCRIPTS**
* `yarn run flow` will run flow check
* `yarn run standard` will run standard.js check
