/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, {Component} from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'
import './index.local.scss'

type StateType = {
  count: number,
  countdownStatus: string
}

type TimerType = {
  intervalId?: number
}

class Countdown extends Component {
  state: StateType = {
    count: 0,
    countdownStatus: 'stopped'
  }

  /* we make custom timer object right on this just like state and props are actually properties of the this object. If we don't use something in render(), it shouldn't be in the state. */
  timer: TimerType = {
    intervalId: undefined
  }

  componentDidUpdate = (prevProps: any, prevState: StateType) => {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer()
          break
        case 'stopped':
          this.setState({
            count: 0
          })
          /* we didnt call break here so the clearInterval activates for stopped and paused case */
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
    /* we save the timer ID in timer object */
    this.timer.intervalId = setInterval(() => {
      const newCount: number = this.state.count - 1
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        })
      }
    }, 1000)
  }

  handleSetCountdown = (seconds: number) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  }

  handleStatusChange = (newStatus: string) => {
    this.setState({
      countdownStatus: newStatus
    })
  }

  render (): React.Element<any> {
    const { count, countdownStatus } = this.state
    const renderControlArea = (): React.Element<any> => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    }

    return (
      <div styleName="container">
        <h1 styleName="page-title">Countdown App 2</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  }
}

export default Countdown
