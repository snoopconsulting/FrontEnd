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
    isButtonPress: state.button.isPress,
    timer: state.timer.time
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

handleClickButton = () => {
  if (this.props.isButtonPress) {
    this.props.stopButton();
    this.props.stopTimer();
    this.props.stopProgressBar();
  } else {
    this.props.playButton();
    this.props.playTimer();
    this.props.playProgressBar();
  }
}

class PlayerBarContainer extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleClickButton} txtPress={this.props.isButtonPress ? 'Stop' : 'Play'} />
        <Timer txtTime={this.props.time} />
        <ProgressBar />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBarContainer);