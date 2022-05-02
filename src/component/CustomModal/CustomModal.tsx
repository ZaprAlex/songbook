import React, { useCallback, useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

import { CLOSE_MODAL_ACTION, ModalCtx } from '../../reducer/modal';
import ModalTypes from '../../constants/ModalTypes';

import { CustomModalProps } from './types';

import styles from './CustomModal.module.scss';

const { CHORDS_ROW_MODAL } = ModalTypes;

const CustomModal: React.FC<CustomModalProps> = ({ children, ...restPros }) => {
    const {
        state: { modalType, isModalOpen },
        dispatch,
    } = useContext(ModalCtx);

    const [contentClass, setContentClass] = useState(styles.content);
    const [hasOnRequestClose, setHasOnRequestClose] = useState(true);

    useEffect(() => {
        switch (modalType) {
            case CHORDS_ROW_MODAL:
                setContentClass(cn(styles.content));
                setHasOnRequestClose(true);
                break;
            default:
                setContentClass(cn(styles.content, styles.defaultModal));
        }
    }, [modalType]);

    const handleClose = useCallback(() => dispatch({ type: CLOSE_MODAL_ACTION }), []);

    return (
        <>
            {isModalOpen && (
                <Modal
                    {...restPros}
                    {...(hasOnRequestClose ? { onRequestClose: handleClose } : {})}
                    isOpen={isModalOpen}
                    className={contentClass}
                    overlayClassName={cn(styles.overlay)}
                    bodyOpenClassName={styles.body}
                    ariaHideApp={false}
                >
                    {children}
                </Modal>
            )}
        </>
    );
};

export default CustomModal;
