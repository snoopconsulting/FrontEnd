import { SET_TIME_RUNNING } from '../utils/ActionTypes';

const initialState = {
    timerLoop: 5,
    isTimerRunning: true
};

export default ( state = initialState, { type, payload } ) => {
    switch (type) {
        case SET_TIME_RUNNING:
            return {
                ...state,
                isTimerRunning: payload
            };
    
        default:
            return state;
    }
};
