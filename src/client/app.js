/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'
import 'bootstrap/scss/bootstrap.scss'

render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
)
