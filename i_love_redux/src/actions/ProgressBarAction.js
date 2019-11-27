import { PLAY_PROGRESS_BAR, STOP_PROGRESS_BAR } from '../config/constants/actionTypesConstant';

export const playProgressBar = payload => ({
    payload,
    type: PLAY_PROGRESS_BAR
});

export const stopProgressBar = payload => ({
    payload,
    type: STOP_PROGRESS_BAR
});