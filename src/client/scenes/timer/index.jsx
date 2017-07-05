/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, {Component} from 'react'
import Clock from 'Clock'
import Controls from 'Controls'
import './index.local.scss'

type StateType = {
  count: number,
  timerStatus: string
}

type TimerType = {
  intervalId?: number
}

class Timer extends Component {
  state: StateType = {
    count: 0,
    timerStatus: 'stopped'
  }

  timer: TimerType = {
    intervalId: undefined
  }

  componentDidUpdate = (prevProps: any, prevState: StateType) => {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer()
          break
        case 'stopped':
          this.setState({
            count: 0
          })
          // falls through
        case 'paused':
          clearInterval(this.timer.intervalId)
          this.timer.intervalId = undefined
          break
      }
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timer.intervalId)
    this.timer.intervalId = undefined
  }

  startTimer = () => {
    this.timer.intervalId = setInterval(() => {
      const newCount: number = this.state.count + 1
      this.setState({
        count: newCount
      })
    }, 1000)
  }

  handleStatusChange = (newStatus: string) => {
    this.setState({
      timerStatus: newStatus
    })
  }

  render (): React.Element<any> {
    const { timerStatus, count } = this.state
    return (
      <div styleName="container">
        <h1 styleName="page-title">Timer App2</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
}

export default Timer
