import React from 'react';

import ModalTypes from '../constants/ModalTypes';

import { CLOSE_MODAL_ACTION, OPEN_MODAL_ACTION, OPEN_CHORDS_ROW_MODAL_ACTION } from './modal';

export interface ModalState {
    modalType: ModalTypes;
    isModalOpen: boolean;
    modalTitle: string;
    modalMessage: string;
    chordsRow?: string[];
}

type OpenModalAction = {
    type: typeof OPEN_MODAL_ACTION;
    payload: {
        modalType: ModalState['modalType'];
        modalTitle?: ModalState['modalTitle'];
        modalMessage?: ModalState['modalMessage'];
    };
};

type OpenStatisticsModalAction = {
    type: typeof OPEN_CHORDS_ROW_MODAL_ACTION;
    payload: {
        modalType: ModalState['modalType'];
        chordsRow: ModalState['chordsRow'];
    };
};

type CloseModalAction = {
    type: typeof CLOSE_MODAL_ACTION;
};

export type ModalReducerActionData = OpenModalAction | CloseModalAction | OpenStatisticsModalAction;

export interface ModalContext extends React.Context<any> {
    state: ModalState;
    dispatch: React.Dispatch<ModalReducerActionData>;
}
