/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.local.scss'

type DefaultPropsType = {
  totalSeconds: number
}

class Clock extends Component {
  static defaultProps: DefaultPropsType = {
    totalSeconds: 0
  }
  static propTypes = {
    totalSeconds: PropTypes.number.isRequired
  }

  formatSeconds (totalSeconds: number): string {
    let seconds = totalSeconds % 60
    let minutes = Math.floor(totalSeconds / 60)
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return `${minutes}:${seconds}`
  }

  render (): React.Element<any> {
    const {totalSeconds} = this.props
    return (
      <div styleName="container">
        <div styleName="clock">
          <span styleName="clock-text">
            {this.formatSeconds(totalSeconds)}
          </span>
        </div>
      </div>
    )
  }
}

export default Clock
