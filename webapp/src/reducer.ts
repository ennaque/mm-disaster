import {combineReducers} from 'redux';

import {
    HIDE_CHANNEL_ACTIONS_MODAL,
    HIDE_PLAYBOOK_ACTIONS_MODAL,
    HIDE_POST_MENU_MODAL,
    HIDE_RUN_ACTIONS_MODAL,
    HidePlaybookActionsModal,
    HidePostMenuModal,
    HideRunActionsModal,
    SHOW_CHANNEL_ACTIONS_MODAL,
    SHOW_PLAYBOOK_ACTIONS_MODAL,
    SHOW_POST_MENU_MODAL,
    SHOW_RUN_ACTIONS_MODAL,
    ShowChannelActionsModal,
    ShowPlaybookActionsModal,
    ShowPostMenuModal,
    ShowRunActionsModal,
} from 'src/types/actions';

const postMenuModalVisibility = (state = false, action: ShowPostMenuModal | HidePostMenuModal) => {
    switch (action.type) {
    case SHOW_POST_MENU_MODAL:
        return true;
    case HIDE_POST_MENU_MODAL:
        return false;
    default:
        return state;
    }
};

const channelActionsModalVisibility = (state = false, action: ShowChannelActionsModal) => {
    switch (action.type) {
    case SHOW_CHANNEL_ACTIONS_MODAL:
        return true;
    case HIDE_CHANNEL_ACTIONS_MODAL:
        return false;
    default:
        return state;
    }
};

const runActionsModalVisibility = (state = false, action: ShowRunActionsModal | HideRunActionsModal) => {
    switch (action.type) {
    case SHOW_RUN_ACTIONS_MODAL:
        return true;
    case HIDE_RUN_ACTIONS_MODAL:
        return false;
    default:
        return state;
    }
};

const playbookActionsModalVisibility = (state = false, action: ShowPlaybookActionsModal | HidePlaybookActionsModal) => {
    switch (action.type) {
    case SHOW_PLAYBOOK_ACTIONS_MODAL:
        return true;
    case HIDE_PLAYBOOK_ACTIONS_MODAL:
        return false;
    default:
        return state;
    }
};

const reducer = combineReducers({
    postMenuModalVisibility,
    channelActionsModalVisibility,
    runActionsModalVisibility,
    playbookActionsModalVisibility,
});

export default reducer;

export type PlaybooksPluginState = ReturnType<typeof reducer>;
