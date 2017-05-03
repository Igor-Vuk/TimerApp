/* @flow */

import React, {Component} from 'react'
import Clock from 'Clock'
import CountdownForm from './components/CountdownForm.jsx'

type StateType = {
  count: number
}

class Countdown extends Component {
  state: StateType = {
    count: 0
  }

  handleSetCountdown = (seconds: number) => {
    this.setState({
      count: seconds
    })
  }

  render (): React.Element<any> {
    const {count} = this.state
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    )
  }
}

export default Countdown
