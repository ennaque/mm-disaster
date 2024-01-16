import {pluginId} from 'src/manifest';

export const SHOW_DISASTER_MODAL = pluginId + '_show_disaster_modal';
export const HIDE_DISASTER_MODAL = pluginId + '_hide_disaster_modal';

export interface ShowDisasterModal {
    type: typeof SHOW_DISASTER_MODAL;
}

export interface HideDisasterModal {
    type: typeof HIDE_DISASTER_MODAL;
}
