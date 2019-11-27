import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';

export default combineReducers({
  button: buttonReducer
});