
import Timer from '../components/Timer';
import * as timerAction from '../actions/Timer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ...state.timer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTimeRunning: (stateTimer) => dispatch(timerAction.changeTimeRunning(stateTimer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
