/* @flow */

import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'
import sinon from 'sinon'
import sinonTestFactory from 'sinon-test'
import Timer from 'Timer'
const sinonTest = sinonTestFactory(sinon)

test('Timer => should exist', (t: Object) => {
  t.plan(1)
  t.ok(Timer)
})

test('Timer => should start timer on started status', sinonTest(function (t: Object) {
  t.plan(2)
  const wrapper: Object = shallow(<Timer />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleStatusChange('started')
  t.equal(wrapper.state().count, 0)
  setTimeout(() => {
    t.equal(wrapper.state().count, 1)
  }, 1001)
  clock.tick(1001)
}))

test('Timer => should pause timer on paused status', sinonTest(function (t: Object) {
  t.plan(2)
  const wrapper: Object = shallow(<Timer />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  wrapper.setState({
    count: 10
  })
  instance.handleStatusChange('started')
  instance.handleStatusChange('paused')
  t.equal(wrapper.state().count, 10)
  setTimeout(() => {
    t.equal(wrapper.state().count, 10)
  }, 2001)
  clock.tick(2001)
}))

test('Timer => should clear count on stopped status', sinonTest(function (t: Object) {
  t.plan(3)
  const wrapper: Object = shallow(<Timer />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  wrapper.setState({
    count: 10
  })
  instance.handleStatusChange('started')
  instance.handleStatusChange('stopped')
  t.equal(wrapper.state().count, 0)
  setTimeout(() => {
    t.equal(wrapper.state().count, 0)
    t.equal(wrapper.state().timerStatus, 'stopped')
  }, 2001)
  clock.tick(2001)
}))

test('Timer => should set IntervalId to undefined before unmount', sinonTest(function (t: Object) {
  t.plan(2)
  const wrapper: Object = shallow(<Timer />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleStatusChange('started')
  /* Inside the code we say to put intervalId to undefined before unmout. Here we test to see if it is undefined after it was unmounted. */
  setTimeout(() => {
    t.equal(wrapper.state().count, 3)
    wrapper.unmount()
    t.equal(instance.timer.intervalId, undefined)
  }, 3001)
  clock.tick(3001)
}))
