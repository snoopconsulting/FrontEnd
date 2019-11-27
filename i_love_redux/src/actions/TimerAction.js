import { PLAY_TIMER, STOP_TIMER } from '../config/constants/actionTypesConstant';

export const playTimer = payload => ({
    payload,
    type: PLAY_TIMER
});

export const stopTimer = payload => ({
    payload,
    type: STOP_TIMER
});