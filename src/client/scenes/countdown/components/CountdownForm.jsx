/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, {Component} from 'react'
import './countdownForm.local.scss'

class CountdownForm extends Component {
  onSubmit = (e: Object) => {
    e.preventDefault()
    const strSeconds: string = this.refs.seconds.value
    /* match a string against a regular expression */
    if (strSeconds.match(/^[0-9]+$/)) {
      this.refs.seconds.value = ''
      this.props.onSetCountdown(parseInt(strSeconds, 10))
    }
  }

  render (): React.Element<any> {
    return (
      <div styleName="container">
        <div className="form-group">
          <form ref="form" onSubmit={this.onSubmit} className="">
            <input type="text" className="form-control" ref="seconds" placeholder="enter time in seconds" />
            <button className="btn btn-primary btn-block">Start</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CountdownForm
