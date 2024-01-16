import React from 'react';
import {render} from 'react-dom';

import {Channel} from '@mattermost/types/channels';

import {GlobalSelectStyle} from 'src/components/backstage/styles';
import {pluginId} from 'src/manifest';
import {ChannelHeaderButton, ChannelHeaderText, ChannelHeaderTooltip} from 'src/components/channel_header';
import {StartDisasterPostMenu} from 'src/components/post_menu';
import PostMenuModal from 'src/components/post_menu_modal';
import reducer from 'src/reducer';

// ts-prune-ignore-next
export default class Plugin {
    stylesContainer?: Element;

    doRegistrations(registry: any): void {
        registry.registerReducer(reducer);
        registry.registerPostDropdownMenuComponent(StartDisasterPostMenu); // message menu button
        registry.registerChannelHeaderButtonAction(ChannelHeaderButton, (channel: Channel) => window.open('https://infra.skyeng.ru?channelId=' + channel.id, '_blank'), ChannelHeaderText, ChannelHeaderTooltip); // channel header button
        registry.registerRootComponent(PostMenuModal);
    }

    public initialize(registry: any): void {
        this.stylesContainer = document.createElement('div');
        document.body.appendChild(this.stylesContainer);
        render(<><GlobalSelectStyle/></>, this.stylesContainer);

        this.doRegistrations(registry);
    }
}

// @ts-ignore
window.registerPlugin(pluginId, new Plugin());
