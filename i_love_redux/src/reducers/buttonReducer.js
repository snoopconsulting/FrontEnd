import { PLAY_BUTTON } from '../config/constants/actionTypesConstant';

const initialState = {
  items: []
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case PLAY_BUTTON:
      return {
        ...state,
        items: payload
      };

    default:
      return state;
  }
};