import { SET_LIST } from '../config/constants/actionTypesConstant';

const initialState = {
  items: []
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        items: payload
      };

    default:
      return state;
  }
};