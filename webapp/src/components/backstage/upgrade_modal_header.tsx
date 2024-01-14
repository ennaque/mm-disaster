import React from 'react';

import styled from 'styled-components';

import {CenteredRow} from 'src/components/backstage/styles';

interface Props {
    titleText: React.ReactNode;
    mainText: React.ReactNode;
}

const UpgradeModalHeader = (props: Props) => {
    return (
        <Header>
            <Title>{props.titleText}</Title>
            <MainText>{props.mainText}</MainText>
        </Header>
    );
};

const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const MainText = styled(CenteredRow)`
    display: grid;
    align-content: center;
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 18px;
`;

const Title = styled(CenteredRow)`
    display: grid;
    align-content: center;
    height: 32px;
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 24px;
    color: rgba(var(--center-channel-color-rgb), 1);
`;

export default UpgradeModalHeader;

