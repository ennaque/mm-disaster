import {GlobalState} from '@mattermost/types/store';

import {pluginId} from 'src/manifest';
import {MMDisasterPluginState} from 'src/reducer';

const pluginState = (state: GlobalState): MMDisasterPluginState => state['plugins-' + pluginId as keyof GlobalState] as unknown as MMDisasterPluginState || {} as MMDisasterPluginState;

export const isPostMenuModalVisible = (state: GlobalState): boolean =>
    pluginState(state).disasterModalVisibility;
