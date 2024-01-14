import {pluginId} from 'src/manifest';

export const SHOW_POST_MENU_MODAL = pluginId + '_show_post_menu_modal';
export const HIDE_POST_MENU_MODAL = pluginId + '_hide_post_menu_modal';
export const SHOW_CHANNEL_ACTIONS_MODAL = pluginId + '_show_channel_actions_modal';
export const HIDE_CHANNEL_ACTIONS_MODAL = pluginId + '_hide_channel_actions_modal';
export const SHOW_RUN_ACTIONS_MODAL = pluginId + '_show_run_actions_modal';
export const HIDE_RUN_ACTIONS_MODAL = pluginId + '_hide_run_actions_modal';
export const SHOW_PLAYBOOK_ACTIONS_MODAL = pluginId + '_show_playbook_actions_modal';
export const HIDE_PLAYBOOK_ACTIONS_MODAL = pluginId + '_hide_playbook_actions_modal';

export interface ShowPostMenuModal {
    type: typeof SHOW_POST_MENU_MODAL;
}

export interface HidePostMenuModal {
    type: typeof HIDE_POST_MENU_MODAL;
}

export interface ShowChannelActionsModal {
    type: typeof SHOW_CHANNEL_ACTIONS_MODAL;
}

export interface ShowRunActionsModal {
    type: typeof SHOW_RUN_ACTIONS_MODAL;
}

export interface HideRunActionsModal {
    type: typeof HIDE_RUN_ACTIONS_MODAL;
}

export interface ShowPlaybookActionsModal {
    type: typeof SHOW_PLAYBOOK_ACTIONS_MODAL;
}

export interface HidePlaybookActionsModal {
    type: typeof HIDE_PLAYBOOK_ACTIONS_MODAL;
}
