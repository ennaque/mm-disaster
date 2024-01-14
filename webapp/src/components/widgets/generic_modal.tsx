import styled from 'styled-components';
import classNames from 'classnames';
import React from 'react';
import {Modal} from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';

import {DestructiveButton, TertiaryButton} from 'src/components/assets/buttons';

type Props = {
    className?: string;
    onHide: () => void;
    onExited?: () => void;
    show?: boolean;
    handleCancel?: (() => void) | null;
    handleConfirm?: (() => void) | null;
    id: string;
};

type State = {
    show: boolean;
};

export default class GenericModal extends React.PureComponent<Props, State> {
    static defaultProps: Partial<Props> = {
        id: 'genericModal',
    };

    state = {show: true};

    onHide = () => {
        this.setState({show: false}, () => {
            setTimeout(this.props.onHide, 150);
        });
    };

    handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        this.onHide();
        window.localStorage.removeItem('disaster_post_id');
        window.localStorage.removeItem('disaster_post_text');
    };

    handleConfirm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        this.onHide();
        const postId = window.localStorage.getItem('disaster_post_id');
        window.open('https://infra.skyeng.ru?message=' + postId, '_blank');
    };

    render() {
        const confirmButton = (
            <DestructiveButton
                type='submit'
                data-testid={'modal-confirm-button'}
                className={classNames('confirm')}
                onClick={this.handleConfirm}
                disabled={false}
            >
                <FormattedMessage defaultMessage='Create disaster2'/>
            </DestructiveButton>
        );

        const cancelButton = (
            <TertiaryButton
                data-testid={'modal-cancel-button'}
                type='button'
                className='cancel'
                onClick={this.handleCancel}
            >
                <FormattedMessage defaultMessage='Cancel'/>
            </TertiaryButton>
        );

        return (
            <StyledModal
                dialogClassName={classNames('a11y__modal GenericModal', this.props.className)}
                show={this.props.show ?? this.state.show}
                onHide={this.onHide}
                onExited={this.onHide}
                restoreFocus={true}
                role='dialog'
                aria-labelledby={`${this.props.id}_heading`}
                id={this.props.id}
                container={document.getElementById('root-portal')}
            >
                <Modal.Header
                    className='GenericModal__header'
                    closeButton={true}
                />
                <>
                    <Modal.Body>{this.props.children}</Modal.Body>
                    {(
                        <Modal.Footer>
                            <DefaultFooterContainer>
                                <Buttons>
                                    {cancelButton}
                                    {confirmButton}
                                </Buttons>
                            </DefaultFooterContainer>
                        </Modal.Footer>
                    )}
                </>
            </StyledModal>
        );
    }
}

export const StyledModal = styled(Modal)`
    &&& {
        display: grid !important;
        grid-template-rows: 1fr auto 2fr;
        place-content: start center;
        padding: 8px;
        /* content-spacing */
        .modal-header {
            margin-bottom: 8px;
        }
        .modal-body {
            overflow: visible;
        }
        .modal-content {
            padding: 24px;
        }
        .modal-footer {
            padding: 24px 0 0 0;
        }
        .close {
            margin: 12px 12px 0 0;
        }
        .modal-dialog {
            margin: 0px !important;
            max-width: 100%;
            grid-row: 2;
        }
    }

    z-index: 1040;

    &&&& {
        /* control correction-overrides */
        .form-control {
            border: none;
        }
        input.form-control {
            padding-left: 16px;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

export const DefaultFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
