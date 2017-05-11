/* @flow */

import React, {Component} from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

type StateType = {
  count: number,
  countdownStatus: string
}

class Countdown extends Component {
  state: StateType = {
    count: 0,
    countdownStatus: 'stopped'
  }

  componentDidUpdate = (prevProps: any, prevState: StateType) => {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer()
          break
      }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
    }, 1000)
  }

  handleSetCountdown = (seconds: number) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
