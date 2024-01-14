import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {hidePostMenuModal} from 'src/actions';

import {isPostMenuModalVisible} from 'src/selectors';

import UpgradeModal from 'src/components/backstage/upgrade_modal';

const PostMenuModal = () => {
    const dispatch = useDispatch();
    const show = useSelector(isPostMenuModalVisible);

    return (
        <UpgradeModal
            show={show}
            onHide={() => dispatch(hidePostMenuModal())}
        />
    );
};

export default PostMenuModal;
