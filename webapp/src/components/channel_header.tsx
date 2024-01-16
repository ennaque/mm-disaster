import React, {ElementRef, useRef} from 'react';
import {FormattedMessage} from 'react-intl';

import DisasterIcon from 'src/components/assets/icons/disaster_icon';

export const ChannelHeaderButton = () => {
    const myRef = useRef<ElementRef<typeof DisasterIcon>>(null);

    // If it has been mounted, we know our parent is always a button.
    const parent = myRef?.current ? myRef?.current?.parentNode as HTMLButtonElement : null;
    parent?.classList.toggle('channel-header__icon--active-inverted', false);

    const handleClick = () => {
        console.log('testsetestset');
    };

    return (
        <DisasterIcon
            id='incidentIcon'
            ref={myRef}
            onClick={handleClick}
        />
    );
};

export const ChannelHeaderText = () => {
    return <FormattedMessage defaultMessage='PlaybooksBLYYYYYAT'/>;
};

export const ChannelHeaderTooltip = ChannelHeaderText;
