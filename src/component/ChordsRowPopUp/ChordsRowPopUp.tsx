import React from 'react';
import Modal from 'react-modal';
import cn from 'classnames';

import { Chords } from '../../constants/chords';
import { noop } from '../../utils/helper';
import ChordItem from '../ChordItem';

import styles from './ChordsRowPopUp.module.scss';

export type ChordsRowPopUp = {
    isOpen?: boolean;
    chords?: string[];
    onClose?: () => void;
};

const ChordsRowPopUp: React.FC<ChordsRowPopUp> = ({
    isOpen = false,
    chords = [],
    onClose = noop,
}) => (
    <>
        {isOpen && !!chords.length && (
            <Modal
                onRequestClose={onClose}
                isOpen={isOpen}
                className={styles.content}
                overlayClassName={cn(styles.overlay)}
                bodyOpenClassName={styles.body}
                ariaHideApp={false}
            >
                <div className={styles.content} onClick={onClose}>
                    {chords.map((value, index) => (
                        <div className={styles.block} key={`chord-${index}`}>
                            <p className={styles.title}>{value}</p>
                            <img
                                src={`/chords/${value.charAt(0)}/${Chords[value].src}`}
                                alt={value}
                            />
                            <ChordItem />
                        </div>
                    ))}
                </div>
            </Modal>
        )}
    </>
);

export default ChordsRowPopUp;
