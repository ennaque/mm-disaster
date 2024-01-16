import {combineReducers} from 'redux';

import {
    HIDE_DISASTER_MODAL,
    HideDisasterModal,
    SHOW_DISASTER_MODAL,
    ShowDisasterModal,
} from 'src/types/actions';

const disasterModalVisibility = (state = false, action: ShowDisasterModal | HideDisasterModal) => {
    switch (action.type) {
    case SHOW_DISASTER_MODAL:
        return true;
    case HIDE_DISASTER_MODAL:
        return false;
    default:
        return state;
    }
};

const reducer = combineReducers({
    disasterModalVisibility,
});

export default reducer;

export type MMDisasterPluginState = ReturnType<typeof reducer>;
