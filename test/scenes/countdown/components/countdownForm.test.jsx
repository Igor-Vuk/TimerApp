/* @flow */
import 'ignore-styles'

import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'
import CountdownForm from '../../../../src/client/scenes/countdown/components/CountdownForm.jsx'

test('CountdownForm => should exist', (t) => {
  t.ok(CountdownForm)
  t.end()
})
