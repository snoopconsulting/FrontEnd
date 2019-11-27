import React, { PureComponent } from 'react'

export default class Timer extends PureComponent {
  render() {
    return (
      <div>
        { this.props.txtTime }
      </div>
    )
  }
}
