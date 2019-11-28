import { INCREMENT_PROGRESS_BAR, RESET_PROGRESS_BAR } from '../config/constants/actionTypesConstant';

export const incrementProgressBar = payload => ({
    payload,
    type: INCREMENT_PROGRESS_BAR
});

export const resetProgressBar = payload => ({
    payload,
    type: RESET_PROGRESS_BAR
});