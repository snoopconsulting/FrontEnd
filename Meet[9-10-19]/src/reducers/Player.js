import { CHOOSE_SPOT } from '../utils/ActionTypes';
import { TYPE_X, TYPE_Y, CANT_FICHAS_USER } from '../utils/constants';

const initialState = {
    currentPlayer: 'player1',
    player1: {
        ficha: TYPE_X,
        nroFicha: CANT_FICHAS_USER
    },
    player2: {
        ficha: TYPE_Y,
        nroFicha: CANT_FICHAS_USER
    }
};

export default ( state = initialState, { type, payload } ) => {
    switch (type) {
        case CHOOSE_SPOT:
            let { id, type } = payload;
            return {
                ...state,
                : payload
            };
    
        default:
            return state;
    }
};
