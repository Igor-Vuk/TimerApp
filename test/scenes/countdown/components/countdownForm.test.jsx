/* @flow */

import 'jsdom-global/register'
import register from 'ignore-styles'
import React from 'react'
import { shallow, mount } from 'enzyme'
import test from 'tape'
import sinon from 'sinon'
import CountdownForm from '../../../../src/client/scenes/countdown/components/CountdownForm.jsx'

register(undefined, () => ({styleName: 'fake_class_name'}))

test('CountdownForm => should exist', (t: Object) => {
  t.ok(CountdownForm)
  t.end()
})

test('CountdownForm => should call onSetCountdown if valid seconds entered', (t: Object) => {
  /* sinon */
  const spy = sinon.spy()
  console.log(typeof (spy))
  /* enzyme */
  const wrapper: Object = mount(<CountdownForm onSetCountdown={spy} />)
  wrapper.ref('seconds').node.value = '10'
  wrapper.find('form').simulate('submit')
  /* Sinon assertion */
  sinon.assert.calledWith(spy, sinon.match(10))
  /* tape */
  t.end()
})
