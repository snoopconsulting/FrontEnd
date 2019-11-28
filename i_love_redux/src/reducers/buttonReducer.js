import { PLAY_BUTTON, STOP_BUTTON } from '../config/constants/actionTypesConstant';

const initialState = {
  text: 'Stop',
  isPlay: false
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case PLAY_BUTTON:
      return {
        ...state,
        text: payload,
        isPlay: true
      };

      case STOP_BUTTON:
        return {
          ...state,
          text: payload,
          isPlay: false
        };

    default:
      return state;
  }
};