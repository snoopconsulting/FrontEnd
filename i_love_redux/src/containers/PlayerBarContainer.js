import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { playButton, stopButton } from '../actions/ButtonAction';
import Timer from '../components/Timer';
import { playTimer, stopTimer } from '../actions/TimerAction';
import ProgressBar from '../components/ProgressBar';
import { playProgressBar, stopProgressBar } from '../actions/ProgressBarAction';

function mapStateToProps(state) {
  return {
    isButtonPlay: state.button.isPlay,
    buttonText: state.button.text,
    timeText: state.timer.text,
    progress: state.progressBar.progress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playButton: () => dispatch(playButton),
    stopButton: () => dispatch(stopButton),
    playTimer: () => dispatch(playTimer),
    stopTimer: () => dispatch(stopTimer),
    playProgressBar: () => dispatch(playProgressBar),
    stopProgressBar: () => dispatch(stopProgressBar)
  };
}

class PlayerBarContainer extends Component {
  constructor() {
    super();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton = () => {
    console.log('log :: PlayerBarContainer :: handleClickButton');
    if (this.props.isButtonPlay) {
      this.props.stopButton();
      this.props.stopTimer();
      this.props.stopProgressBar();
    } else {
      this.props.playButton();
      this.props.playTimer();
      this.props.playProgressBar();
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClickButton}>
          <Button buttonText={this.props.buttonText} />
        </div>
        <Timer timeText={this.props.timeText} />
        <ProgressBar progress={this.props.progress} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBarContainer);