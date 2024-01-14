import {
    HIDE_POST_MENU_MODAL,
    HidePostMenuModal,
    SHOW_POST_MENU_MODAL,
    ShowPostMenuModal,
} from 'src/types/actions';

export const showPostMenuModal = (): ShowPostMenuModal => ({
    type: SHOW_POST_MENU_MODAL,
});

export const hidePostMenuModal = (): HidePostMenuModal => ({
    type: HIDE_POST_MENU_MODAL,
});
