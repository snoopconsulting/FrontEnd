import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';
import timerReducer from './timerReducer';
import progressBarReducer from './progressBarReducer';

export default combineReducers({
  button: buttonReducer,
  timer: timerReducer,
  progressBar: progressBarReducer
});