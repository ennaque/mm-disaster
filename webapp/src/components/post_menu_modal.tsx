import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {hidePostMenuModal} from 'src/actions';

import {isPostMenuModalVisible} from 'src/selectors';

import DisasterConfirmationModal from './backstage/disaster_confirmation_modal';

const PostMenuModal = () => {
    const dispatch = useDispatch();
    const show = useSelector(isPostMenuModalVisible);

    return (
        <DisasterConfirmationModal
            show={show}
            onHide={() => dispatch(hidePostMenuModal())}
        />
    );
};

export default PostMenuModal;
