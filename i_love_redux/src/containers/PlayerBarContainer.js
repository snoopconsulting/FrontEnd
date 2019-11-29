import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { playButton, stopButton } from '../actions/ButtonAction';
import Timer from '../components/Timer';
import { incrementTimer, resetTimer } from '../actions/TimerAction';
import ProgressBar from '../components/ProgressBar';
import { incrementProgressBar, resetProgressBar } from '../actions/ProgressBarAction';
import playerBarContainerStyle from '../assets/styles/playerBarContainerStyle';
import { CONSTANTS } from '../config/constants/indexConstant';

function mapStateToProps(state) {
  return {
    isButtonPlay: state.button.isPlay,
    timeValue: state.timer.value,
    progressValue: state.progressBar.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playButton: () => dispatch(playButton()),
    stopButton: () => dispatch(stopButton()),
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
    this.props.stopButton();
    clearInterval(this.runVideoInterval);
  }

  reset = () => {
    this.props.stopButton();
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
      this.props.playButton();
      this.runVideoInterval = setInterval(() => {
        if (this.props.timeValue === CONSTANTS.VIDEO_TIME) {
          this.reset();
        } else {
          this.increment();
        }
      }, 1000);
    }
  }

  render() {
    return (
      <div style={playerBarContainerStyle.box}>
        <div onClick={this.handleClickButton}>
          <Button isButtonPlay={this.props.isButtonPlay} />
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