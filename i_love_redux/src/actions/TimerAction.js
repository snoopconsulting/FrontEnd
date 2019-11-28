import { INCREMENT_TIMER, RESET_TIMER } from '../config/constants/actionTypesConstant';

export const incrementTimer = payload => ({
    payload,
    type: INCREMENT_TIMER
});

export const resetTimer = payload => ({
    payload,
    type: RESET_TIMER
});