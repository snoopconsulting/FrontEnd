import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { playButton, stopButton } from '../actions/ButtonAction';
import Timer from '../components/Timer';
import { incrementTimer, resetTimer } from '../actions/TimerAction';
import ProgressBar from '../components/ProgressBar';
import { incrementProgressBar, resetProgressBar } from '../actions/ProgressBarAction';

function mapStateToProps(state) {
  return {
    isButtonPlay: state.button.isPlay,
    buttonText: state.button.text,
    timeValue: state.timer.value,
    progressValue: state.progressBar.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playButton: (text) => dispatch(playButton(text)),
    stopButton: (text) => dispatch(stopButton(text)),
    incrementTimer: (value) => dispatch(incrementTimer(value)),
    resetTimer: () => dispatch(resetTimer()),
    incrementProgressBar: (value) => dispatch(incrementProgressBar(value)),
    resetProgressBar: () => dispatch(resetProgressBar())
  };
}

class PlayerBarContainer extends Component {
  constructor() {
    super();
    this.runVideoInterval = null;
  }

  stop = () => {
    this.props.stopButton('Stop');
    clearInterval(this.runVideoInterval);
  }

  reset = () => {
    this.props.stopButton('Stop');
    this.props.resetTimer();
    this.props.resetProgressBar();
    clearInterval(this.runVideoInterval);
  }

  increment = () => {
    this.props.incrementTimer(this.props.timeValue);
    this.props.incrementProgressBar(this.props.progressValue);
  }

  handleClickButton = () => {
    if (this.props.isButtonPlay) {
      this.stop();
    } else {
      this.props.playButton('Play');
      this.runVideoInterval = setInterval(() => {
        if (this.props.timeValue === 4) {
          this.reset();
        } else {
          this.increment();
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClickButton}>
          <Button buttonText={this.props.buttonText} />
        </div>
        <Timer timeValue={this.props.timeValue} />
        <ProgressBar progressValue={this.props.progressValue} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBarContainer);