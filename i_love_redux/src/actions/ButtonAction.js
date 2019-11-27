import { PLAY_BUTTON, STOP_BUTTON } from '../config/constants/actionTypesConstant';

export const playButton = payload => ({
    payload,
    type: PLAY_BUTTON
});

export const stopButton = payload => ({
    payload,
    type: STOP_BUTTON
});