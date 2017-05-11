/* @flow */

import 'jsdom-global/register'
import register from 'ignore-styles'
import React from 'react'
import { mount } from 'enzyme'
import test from 'tape'
import sinon from 'sinon'
import CountdownForm from 'CountdownForm'

register(undefined, () => ({styleName: 'fake_class_name'}))

test('CountdownForm => should exist', (t: Object) => {
  t.ok(CountdownForm)
  t.end()
})

test('CountdownForm => should call onSetCountdown if valid seconds entered', (t: Object) => {
  t.plan(1)
  /* sinon */
  const spy = sinon.spy()
  /* enzyme */
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = '10'
  wrapper.find('form').simulate('submit')
  /* tape */
  t.equal(spy.args[0][0], 10)
})

test('CountdownForm => it should not call onSetCountdown if invalid seconds entered', (t: Object) => {
  t.plan(1)
  const spy = sinon.spy()
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = '10a'
  wrapper.find('form').simulate('submit')
  t.equal(spy.called, false)
})

test('CountdownForm => it should call alert if no seconds entered', (t: Object) => {
  t.plan(1)
  const spy = sinon.spy(console, 'log')
  const wrapper: Object = mount(<CountdownForm />)
  wrapper.ref('seconds').node.value = ''
  wrapper.find('form').simulate('submit')
  t.equal(spy.args[0][0], 'Not a good value')
})
