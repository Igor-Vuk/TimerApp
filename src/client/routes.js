/* @flow */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Container from 'Container'
import Countdown from 'Countdown'
import Timer from 'Timer'

export default (
  <Route path='/' component={Container} >
    <Route path='countdown' component={Countdown} />
    <IndexRoute component={Timer} />
  </Route>
)
