import { PLAY_PROGRESS_BAR, STOP_PROGRESS_BAR } from '../config/constants/actionTypesConstant';

const initialState = {
  progress: []
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case PLAY_PROGRESS_BAR:
      return {
        ...state,
        progress: payload
      };

      case STOP_PROGRESS_BAR:
        return {
          ...state,
          progress: payload
        };

    default:
      return state;
  }
};