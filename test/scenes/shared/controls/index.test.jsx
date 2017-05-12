/* @flow */

import register from 'ignore-styles'
import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'
import Controls from 'Controls'

register(undefined, () => ({styleName: 'fake_class_name'}))

test('Controls => should exist', (t: Object) => {
  t.plan(1)
  t.ok(Controls)
})

/* Since we are using conditional rendering into component we are checking if pause button was rendered when we pass countdownStatus={'started'} to the Controls component.
If it was rendered .length will show 1 */
test('Controls => should render pause button when countdownStatus equals started', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Controls countdownStatus={'started'} />)
  const pauseButton = wrapper.render().find('.btn-info').length
  t.equal(pauseButton, 1)
})

test('Controls => should render start button when countdownStatus equals paused', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Controls countdownStatus={'paused'} />)
  const startButton = wrapper.render().find('.btn-success').length
  t.equal(startButton, 1)
})
