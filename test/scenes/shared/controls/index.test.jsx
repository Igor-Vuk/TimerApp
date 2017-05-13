/* @flow */

import register from 'ignore-styles'
import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'
import Controls from 'Controls'
import sinon from 'sinon'

register(undefined, () => ({styleName: 'fake_class_name'}))

test('Controls => should exist', (t: Object) => {
  t.plan(1)
  t.ok(Controls)
})

/* Since we are using conditional rendering into component we are checking if pause button was rendered when we pass countdownStatus={'started'} to the Controls component.
If it was rendered .length will show 1 */
test('Controls => should render pause button when countdownStatus equals started', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Controls countdownStatus={'started'} onStatusChange={() => {}} />)
  const pauseButton = wrapper.find('.btn-info').length
  t.equal(pauseButton, 1)
})

/* We are passing empty dummy function onStatusChange since we designated in code propTypes and said that it was required */
test('Controls => should render start button when countdownStatus equals paused', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Controls countdownStatus={'paused'} onStatusChange={() => {}} />)
  const startButton = wrapper.find('.btn-success').length
  t.equal(startButton, 1)
})

test('Controls => should trigger onStatusChange prop when start button pressed', (t: Object) => {
  t.plan(1)
  const spy = sinon.spy()
  const wrapper: Object = shallow(<Controls countdownStatus={'paused'} onStatusChange={spy} />)
  const startButton = wrapper.find('.btn-success')
  startButton.simulate('click')
  t.equal(spy.called, true)
})

test('Controls => should trigger onStatusChange prop when  pause button pressed', (t: Object) => {
  t.plan(1)
  const spy = sinon.spy()
  const wrapper: Object = shallow(<Controls countdownStatus={'started'} onStatusChange={spy} />)
  const pauseButton = wrapper.find('.btn-info')
  pauseButton.simulate('click')
  t.equal(spy.called, true)
})
