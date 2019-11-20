import { SET_TIME_RUNNING } from '../utils/ActionTypes';

const initialState = {
    isTimeRunning: false
};

export default ( state = initialState, { type, payload } ) => {
    switch (type) {
        case SET_TIME_RUNNING:
            return {
                ...state,
                isTimeRunning: payload
            };
    
        default:
            return state;
    }
};
