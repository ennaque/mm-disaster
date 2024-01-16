import React from 'react';
import styled from 'styled-components';

interface Props {
    id?: string;
}

const Icon = styled.i`
	font-size: 22px;
`;

const DisasterIcon = React.forwardRef<HTMLElement, Props>((props: Props, forwardedRef) => (
    <Icon
        id={props?.id}
        ref={forwardedRef}
        className={'CompassIcon icon-disaster LogoIcon'}
    />
));

export default DisasterIcon;
