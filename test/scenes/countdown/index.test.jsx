/* @flow */

import 'jsdom-global/register'
import register from 'ignore-styles'
import React from 'react'
import { shallow } from 'enzyme'
import test from 'tape'
import sinon from 'sinon'
import Countdown from 'Countdown'

register(undefined, () => ({styleName: 'fake_class_name'}))

test('Countdown => should exist', (t: Object) => {
  t.ok(Countdown)
  t.end()
})

test('Countdown =>  should set state to started and count down one second', (t: Object) => {
  t.plan(3)
  const wrapper: Object = shallow(<Countdown />)
  /* Causes Sinon to replace the global setTimeout, it freezes the timer */
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleSetCountdown(10)
  t.equal(wrapper.state().count, 10)
  t.equal(wrapper.state().countdownStatus, 'started')

  setTimeout(() => {
    t.equal(wrapper.state().count, 9)
  }, 1001)

  /* Time can be advanced by calling the tick method of your clock object and passing it a value in milliseconds. */
  clock.tick(1001)
})

test('Countdown =>  should never set count less than zero', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Countdown />)
  /* Causes Sinon to replace the global setTimeout, it freezes the timer */
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleSetCountdown(1)

  setTimeout(() => {
    t.equal(wrapper.state().count, 0)
  }, 3001)

  /* Time can be advanced by calling the tick method of your clock object and passing it a value in milliseconds. */
  clock.tick(3001)
})

test('Countdown => should pause countdown on 5 seconds when paused status after 3s passes', (t: Object) => {
  t.plan(2)
  const wrapper: Object = shallow(<Countdown />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleSetCountdown(5)
  instance.handleStatusChange('paused')
  setTimeout(() => {
    t.equal(wrapper.state().count, 5)
    t.equal(wrapper.state().countdownStatus, 'paused')
  }, 3001)
  clock.tick(3001)
})

test('Countdown => should set count to zero when stopped status', (t: Object) => {
  t.plan(2)
  const wrapper: Object = shallow(<Countdown />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleSetCountdown(5)
  instance.handleStatusChange('stopped')
  setTimeout(() => {
    t.equal(wrapper.state().count, 0)
    t.equal(wrapper.state().countdownStatus, 'stopped')
  }, 3001)
  clock.tick(3001)
})

test('Countdown => should set IntervalId to undefined before unmount', (t: Object) => {
  t.plan(1)
  const wrapper: Object = shallow(<Countdown />)
  const clock = sinon.useFakeTimers()
  const instance = wrapper.instance()
  instance.handleSetCountdown(5)
  /* Inside the code we say to put intervalId to undefined before unmout. Here we test to see if it is undefined after it was unmounted. */
  setTimeout(() => {
    wrapper.unmount()
    t.equal(instance.timer.intervalId, undefined)
  }, 3001)
  clock.tick(3001)
})
