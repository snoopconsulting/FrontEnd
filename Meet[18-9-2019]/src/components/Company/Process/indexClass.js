import React, { Component } from 'react'
import { COLORS, YELLOW, PROCESSES_SIZE } from '../../../constants/processes'
import PropTypes from 'prop-types'

class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.process.color,
      processesStopped: 0
    };
  }

  stopProcesses = color => {
    this.setState({ color });
  }

  stop = () => {
    this.setState({
      processesStopped: (PROCESSES_SIZE - this.props.process.id)
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      this.stop();
    }
  }

  render () {
    let { process } = this.props;

    return (
      <div
        onClick={() => this.stopProcesses(YELLOW)}
        style={{ width: 100, marginLeft: process.brother ? 400 : 0 }}>
        <span style={{
          color: '#000',
          marginBottom: 10,
          display: 'block',
          width: 100,
          height: 100,
          lineHeight: 6,
          borderRadius: 2,
          boxShadow: '3px 3px 5px 1px rgb(7, 56, 75)',
          backgroundColor: COLORS[this.state.color] }}>
            { this.state.processesStopped === 0 ? '' : `Restan ${this.state.processesStopped}` }
        </span>
        {process.title}
      </div>
    );
  }
}

Process.propTypes = {
  color: PropTypes.string,
  count: PropTypes.number
}

export default Process;