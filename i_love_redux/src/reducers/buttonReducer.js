import { PLAY_BUTTON, STOP_BUTTON } from '../config/constants/actionTypesConstant';

const initialState = {
  isPlay: false
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case PLAY_BUTTON:
      return {
        ...state,
        isPlay: true
      };

      case STOP_BUTTON:
        return {
          ...state,
          isPlay: false
        };

    default:
      return state;
  }
};