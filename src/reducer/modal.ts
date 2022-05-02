import * as React from 'react';

import ModalTypes from '../constants/ModalTypes';

import { ModalContext, ModalReducerActionData, ModalState } from './types';

export const OPEN_MODAL_ACTION = 'OPEN_MODAL_ACTION';
export const CLOSE_MODAL_ACTION = 'CLOSE_MODAL_ACTION';
export const OPEN_CHORDS_ROW_MODAL_ACTION = 'OPEN_CHORDS_ROW_MODAL_ACTION';

export const ModalCtx = React.createContext<ModalContext>({} as ModalContext);

export const initialState: ModalState = {
    modalType: ModalTypes.NONE,
    isModalOpen: false,
    modalTitle: '',
    modalMessage: '',
    chordsRow: [],
};

export function userReducer(state: ModalState, action: ModalReducerActionData): ModalState {
    switch (action.type) {
        case OPEN_MODAL_ACTION:
        case OPEN_CHORDS_ROW_MODAL_ACTION:
            return { ...state, ...action.payload, isModalOpen: true };
        case CLOSE_MODAL_ACTION:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}
