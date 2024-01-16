import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GlobalState} from '@mattermost/types/store';
import {isSystemMessage} from 'mattermost-redux/utils/post_utils';
import {getPost} from 'mattermost-redux/selectors/entities/posts';
import {getChannel} from 'mattermost-redux/selectors/entities/channels';
import {Channel} from '@mattermost/types/channels';

import {FormattedMessage} from 'react-intl';

import DisasterPostMenuIcon from 'src/components/assets/icons/post_menu_icon';

import {showPostMenuModal} from 'src/actions';
import {Post} from '@mattermost/types/posts';

interface Props {
    postId: string;
}

export const StartDisasterPostMenu = (props: Props) => {
    const dispatch = useDispatch();
    const channel = useSelector<GlobalState, Channel | null>((state) => {
        const post = getPost(state, props.postId);
        if (!post || isSystemMessage(post)) {
            return null;
        }
        return getChannel(state, post.channel_id);
    });
    const message: Post = useSelector<GlobalState, Post>((s: GlobalState): Post => {
        return getPost(s, props.postId);
    });
    if (!channel) {
        return null;
    }

    const handleClick = () => {
        window.localStorage.setItem('disaster_post_id', message?.id as string);
        window.localStorage.setItem('disaster_post_text', message?.message as string);
        dispatch(showPostMenuModal());
    };

    return (
        <React.Fragment>
            <li
                className='MenuItem'
                role='menuitem'
                onClick={handleClick}
            >
                <button
                    className='style--none'
                    role='presentation'
                >
                    <DisasterPostMenuIcon/>
                    <FormattedMessage defaultMessage='Create a disaster'/>
                </button>
            </li>
        </React.Fragment>
    );
};
