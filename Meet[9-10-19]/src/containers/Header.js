
import React, { Component } from 'react';
import Score from '../components/score/Score';
import Timer from '../components/timer/Timer';
import * as timerAction from '../actions/Timer';
import { connect } from 'react-redux';

class Header extends Component {

  changeTimeRunning = (state) =>{
    
    this.props.changeTimeRunning(false);
    //Cambiar Jugador

  }

    render() {
        return (
            <div className="App-header">
                <Score score={0} usuario={'1'} />
                <Timer start={this.props.timer.isTimerRunning} finishLoop={this.changeTimeRunning} timerLoop={this.props.timer.timerLoop} />
                <Score score={0} usuario={'2'} />
            </div>
        );
    }
}

const mapStateToProps = ({ timer }) => ({ timer });

const mapDispatchToProps = dispatch => {
  return {
    changeTimeRunning: (stateTimer) => dispatch(timerAction.changeTimeRunning(stateTimer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
