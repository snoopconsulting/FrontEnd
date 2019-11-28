import { INCREMENT_PROGRESS_BAR, RESET_PROGRESS_BAR } from '../config/constants/actionTypesConstant';

const initialState = {
  value: 0
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case INCREMENT_PROGRESS_BAR:
      return {
        ...state,
        value: payload+1
      };

    case RESET_PROGRESS_BAR:
      return {
        ...state,
        value: 0
      };

    default:
      return state;
  }
};