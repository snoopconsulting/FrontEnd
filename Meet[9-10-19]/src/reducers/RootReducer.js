import { combineReducers } from 'redux';
import timerReducer from './Timer';

const appReducer = combineReducers({
  timerLoop: 5,
  timer: timerReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};
  
export default rootReducer;
