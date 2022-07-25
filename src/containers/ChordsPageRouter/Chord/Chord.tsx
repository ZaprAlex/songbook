import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { encodeChord } from '../../../utils/stringHelper';
import { scrollToTop } from '../../../utils/helper';
import { Chords, IChord } from '../../../constants/chords';
import { ROUTE } from '../../../constants/route';
import { Themes } from '../../../constants/Themes';
import FullScreenButton from '../../../component/FullScreenButton';

import styles from './Chord.module.scss';

type ChordProps = {
    chord: IChord;
};

const { DARK } = Themes;

const Chord: FC<ChordProps> = ({ chord: { chord, name, src } }) => {
    const history = useHistory();
    const { theme } = useTheme();
    const [chordsSameNote, setChordsSameNote] = useState<string[]>([]);
    const note = chord.charAt(0);

    useEffect(() => {
        scrollToTop();
        setChordsSameNote(Object.keys(Chords).filter((value) => value.charAt(0) === note));
    }, []);

    function withThemeClassName(className: string) {
        return cn(className, { [styles.dark]: theme === DARK });
    }

    const onChordClick = useCallback(
        (value: string) => history.push(`${ROUTE.CHORDS}/${encodeChord(value)}`),
        []
    );

    const onNoteClick = useCallback(() => onChordClick(note), [note]);

    return (
        <>
            <div className={styles.content}>
                <p className={withThemeClassName(styles.header)}>{chord}</p>
                <p className={withThemeClassName(styles.description)}>{name}</p>
                <img className={styles.chordImage} src={`/chords/${note}/${src}`} alt={name} />
                <div className={styles.note} onClick={onNoteClick}>
                    {note}
                </div>
                <div className={styles.chordsSameNoteBlock}>
                    {chordsSameNote.map((value, index) => (
                        <div
                            key={`same-note-chord-${index}`}
                            className={styles.chord}
                            onClick={() => onChordClick(value)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <FullScreenButton />
            </div>
        </>
    );
};

export default Chord;
