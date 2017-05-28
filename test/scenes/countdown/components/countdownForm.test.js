/* @flow */

import React from 'react'
import { mount } from 'enzyme'
import test from 'tape'
import sinon from 'sinon'
import sinonTest from 'sinon-test'
import CountdownForm from 'CountdownForm'
sinon.test = sinonTest.configureTest(sinon)

test('CountdownForm => should exist', (t: Object) => {
  t.ok(CountdownForm)
  t.end()
})

test('CountdownForm => should call onSetCountdown if valid seconds entered', sinon.test(function (t: Object) {
  t.plan(1)
  /* sinon */
  const spy = this.spy()
  this.stub(window, 'alert')
  /* enzyme */
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = '10'
  wrapper.find('form').simulate('submit')
  /* tape */
  t.equal(spy.args[0][0], 10)
  wrapper.unmount()
}))

test('CountdownForm => it should not call onSetCountdown if invalid seconds entered', sinon.test(function (t: Object) {
  t.plan(1)
  const spy = this.spy()
  this.stub(window, 'alert')
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = '10b'
  wrapper.find('form').simulate('submit')
  wrapper.unmount()
  t.equal(spy.called, false)
  wrapper.unmount()
}))

test('CountdownForm => it should call alert if no seconds entered', sinon.test(function (t: Object) {
  t.plan(1)
  const spy = this.spy()
  const stub = this.stub(window, 'alert')
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = ''
  wrapper.find('form').simulate('submit')
  t.equal(stub.called, true)
  wrapper.unmount()
}))
