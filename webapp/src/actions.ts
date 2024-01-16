import {
    HIDE_DISASTER_MODAL,
    HideDisasterModal,
    SHOW_DISASTER_MODAL,
    ShowDisasterModal,
} from 'src/types/actions';

export const showPostMenuModal = (): ShowDisasterModal => ({
    type: SHOW_DISASTER_MODAL,
});

export const hidePostMenuModal = (): HideDisasterModal => ({
    type: HIDE_DISASTER_MODAL,
});
