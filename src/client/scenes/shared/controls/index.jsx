/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.local.scss'

class Controls extends Component {
  static propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  }
  /* Here we have a function that returns a function */
  onStatusChange = (newStatus: string): Function => {
    return (
      () => {
        this.props.onStatusChange(newStatus)
      }
    )
  }

  render (): React.Element<any> {
    const { countdownStatus }: {countdownStatus: string} = this.props
    const renderStartButton = (): any => {
      if (countdownStatus === 'started') {
        /* onClick expects a function. Here we are using the function but we are calling it, meaning that the return value from onStatusChange is gonna get called when person clicks the button - Currying pattern */
        return <button className="btn btn-info" onClick={this.onStatusChange('paused')}>Pause</button>
      } else {
        return <button className="btn btn-success" onClick={this.onStatusChange('started')}>Start</button>
      }
    }
    return (
      <div styleName="container">
        {renderStartButton()}
        <button className="btn btn-danger" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}

export default Controls
