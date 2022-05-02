import React, { useContext } from 'react';

import { ModalCtx } from '../../reducer/modal';
import ModalTypes from '../../constants/ModalTypes';
import CustomModal from '../CustomModal';

import ChordsRowPopUp from './ChordsRowPopUp';

const { CHORDS_ROW_MODAL } = ModalTypes;

const PopUp: React.FC = () => {
    const {
        state: { modalType, isModalOpen },
    } = useContext(ModalCtx);

    return <>{isModalOpen && <CustomModal>{generateBody(modalType)}</CustomModal>}</>;
};

export function generateBody(type: ModalTypes) {
    switch (type) {
        case CHORDS_ROW_MODAL:
            return <ChordsRowPopUp />;
        default:
            return null;
    }
}

export default PopUp;
