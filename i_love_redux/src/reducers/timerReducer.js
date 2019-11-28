import { PLAY_TIMER, STOP_TIMER } from '../config/constants/actionTypesConstant';

const initialState = {
  text: []
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case PLAY_TIMER:
      return {
        ...state,
        text: payload
      };

    case STOP_TIMER:
      return {
        ...state,
        text: payload
      };
  
    default:
      return state;
  }
};