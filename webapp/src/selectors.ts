import {createSelector} from 'reselect';
import General from 'mattermost-redux/constants/general';
import {GlobalState} from '@mattermost/types/store';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getMyChannelMemberships, getMyCurrentChannelMembership} from 'mattermost-redux/selectors/entities/common';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import {pluginId} from 'src/manifest';
import {PlaybooksPluginState} from 'src/reducer';

// Assert known typing
const pluginState = (state: GlobalState): PlaybooksPluginState => state['plugins-' + pluginId as keyof GlobalState] as unknown as PlaybooksPluginState || {} as PlaybooksPluginState;

export const isPostMenuModalVisible = (state: GlobalState): boolean =>
    pluginState(state).postMenuModalVisibility;

export const isCurrentUserAdmin = createSelector(
    'isCurrentUserAdmin',
    getCurrentUser,
    (user) => {
        const rolesArray = user.roles.split(' ');
        return rolesArray.includes(General.SYSTEM_ADMIN_ROLE);
    },
);

export const isCurrentUserChannelAdmin = createSelector(
    'isCurrentUserChannelAdmin',
    getMyCurrentChannelMembership,
    (membership) => {
        return membership?.scheme_admin || false;
    },
);

export const isCurrentUserChannelMember = (channelId: string) => createSelector(
    'isCurrentUserChannelMember',
    getMyChannelMemberships,
    (memberships) => {
        return memberships[channelId]?.scheme_user || memberships[channelId]?.scheme_admin || false;
    },
);

export const isTeamEdition = createSelector(
    'isTeamEdition',
    getConfig,
    (config) => config.BuildEnterpriseReady !== 'true',
);
