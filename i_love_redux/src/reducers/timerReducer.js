import { INCREMENT_TIMER, RESET_TIMER } from '../config/constants/actionTypesConstant';

const initialState = {
  value: 0
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case INCREMENT_TIMER:
      return {
        ...state,
        value: payload+1
      };

      case RESET_TIMER:
        return {
          ...state,
          value: 0
        };
  
    default:
      return state;
  }
};