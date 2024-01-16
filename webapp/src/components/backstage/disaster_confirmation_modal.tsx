import React from 'react';

import styled from 'styled-components';

import GenericModal from 'src/components/widgets/generic_modal';

import DisasterConfirmationModalHeader from 'src/components/backstage/disaster_confirmation_modal_header';

interface Props {
    show: boolean;
    onHide: () => void;
}

const DisasterConfirmationModal = (props: Props) => {
    const postText = window.localStorage.getItem('disaster_post_text');

    return (
        <SizedGenericModal
            id={'id'}
            show={props.show}
            onHide={props.onHide}
        >
            <Content>
                <DisasterConfirmationModalHeader
                    titleText='Are you sure to create disaster from message?'
                    mainText={postText}
                />
            </Content>
        </SizedGenericModal>
    );
};

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const SizedGenericModal = styled(GenericModal)`
    width: 812px;
    height: 100%;
    padding: 0;

    &&&.close {
        color: rgba(var(--center-channel-color-rgb), 0.56);
    }

    &&&.GenericModal__button.confirm {
        padding: 13px 20px;
    }

    &&&.modal-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        margin-bottom: 48px;
        padding: 0;
    }
`;

export default DisasterConfirmationModal;
