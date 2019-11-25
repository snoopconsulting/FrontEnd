import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { playButton, stopButton } from '../actions/ButtonAction';
import Timer from '../components/Timer';
import { playTimer, stopTimer } from '../actions/TimerAction';
import ProgressBar from '../components/ProgressBar';
import { playProgressBar, stopProgressBar } from '../actions/ProgressActionBar';

function mapStateToProps(state) {
  return {
    isButtonPlay: state.button.isPlay
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

class PlayerContainer extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleClickButton} />
        <Timer />
        <ProgressBar />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);