import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <div> it's a stateful component </div>
        <div> time: {this.state.time.toString()}</div>
      </div>
    )
  }
}
