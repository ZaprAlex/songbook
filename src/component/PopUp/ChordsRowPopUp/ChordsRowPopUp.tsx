import React, { useContext, useEffect, useRef } from 'react';

import { CLOSE_MODAL_ACTION, ModalCtx } from '../../../reducer/modal';
import { Chords } from '../../../constants/chords';

import styles from './ChordsRowPopUp.module.scss';

const ChordsRowPopUp: React.FC = () => {
    const {
        state: { chordsRow },
        dispatch,
    } = useContext(ModalCtx);

    const closeModal = () => dispatch({ type: CLOSE_MODAL_ACTION });

    return chordsRow?.length ? (
        <div className={styles.content} onClick={closeModal}>
            {chordsRow.map((value, index) => (
                <div className={styles.block} key={`chord-${index}`}>
                    <p className={styles.title}>{value}</p>
                    <img src={Chords[value].src} alt={value} />
                </div>
            ))}
        </div>
    ) : null;
};

export default ChordsRowPopUp;
