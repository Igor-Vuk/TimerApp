/* @flow */
import 'ignore-styles'

import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Clock from '../../../../src/client/scenes/shared/clock/index.jsx'

test('Clock => should exist', (t: Object) => {
  t.ok(Clock)
  t.end()
})

test('Clock => should format seconds', (t: Object) => {
  const wrapper: Object = shallow(<Clock />)
  const seconds: number = 615
  const expected: string = '10:15'
  const actual: string = wrapper.instance().formatSeconds(seconds)
  t.equal(actual, expected)
  t.end()
})

test('Clock => should format seconds when min/sec are less than 10 (leading zero 0)', (t: Object) => {
  const wrapper: Object = shallow(<Clock />)
  const seconds: number = 61
  const expected: string = '01:01'
  const actual: string = wrapper.instance().formatSeconds(seconds)
  t.equal(actual, expected)
  t.end()
})

/* .find(), .text() is enzyme shallow method */
/* since we ignored styles at the top we can not find it based on styleName so we use className */
test('Clock => should render clock to output', (t: Object) => {
  const wrapper: Object = shallow(<Clock totalSeconds={62} />)
  const actual: string = wrapper.find('.clock-text').text()
  t.equal(actual, '01:02')
  t.end()
})
