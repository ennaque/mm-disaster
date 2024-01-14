import React, {ElementRef, useRef} from 'react';
import {FormattedMessage} from 'react-intl';

import PlaybooksProductIcon from 'src/components/assets/icons/playbooks_product_icon';

export const ChannelHeaderButton = () => {
    const myRef = useRef<ElementRef<typeof PlaybooksProductIcon>>(null);

    // If it has been mounted, we know our parent is always a button.
    const parent = myRef?.current ? myRef?.current?.parentNode as HTMLButtonElement : null;
    parent?.classList.toggle('channel-header__icon--active-inverted', false);

    const handleClick = () => {
        console.log('testsetestset');
    };

    return (
        <PlaybooksProductIcon
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
