/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './countdownForm.local.scss'
class CountdownForm extends Component {
  static propTypes = {
    handleSetCountdown: PropTypes.func
  }

  onSubmit = (e: Object) => {
    e.preventDefault()
    const strSeconds: string = this.refs.seconds.value
    /* match a string against a regular expression */
    if (strSeconds.match(/^[1-9][0-9]+$/)) {
      this.refs.seconds.value = ''
      this.props.onSetCountdown(parseInt(strSeconds, 10))
    } else {
      /*console.log('clock', $('span').length)*/
      console.log('Not a good value')
    }
  }

  render (): React.Element<any> {
    return (
      <div styleName="container">
        <form ref="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="seconds" placeholder="enter time in seconds" />
            <button className="btn btn-primary btn-block">Start</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CountdownForm
