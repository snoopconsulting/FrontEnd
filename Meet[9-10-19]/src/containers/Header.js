
import React, { Component } from 'react';
import Score from '../components/score/Score';
import Timer from '../components/timer/Timer';
import * as timerAction from '../actions/Timer';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <Score score={0} usuario={1} />
                <Timer start={true} changeTimeRunning={this.props.changeTimeRunning} />
                <Score score={0} usuario={2} />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTimeRunning: (stateTimer) => dispatch(timerAction.changeTimeRunning(stateTimer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
