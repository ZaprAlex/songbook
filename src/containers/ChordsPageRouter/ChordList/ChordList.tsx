import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Chords } from '../../../constants/chords';
import { ROUTE } from '../../../constants/route';
import { Themes } from '../../../constants/Themes';
import { useAppNavigation } from '../../../component/Navigation';
import { useTheme } from '../../../hooks/useTheme';
import { encodeChord } from '../../../utils/stringHelper';
import { scrollToTop } from '../../../utils/helper';

import styles from './ChordList.module.scss';

type Params = {
    note?: string;
};

const ChordList: FC = () => {
    const history = useHistory();
    const { theme } = useTheme();
    const { note = '' } = useParams<Params>();
    const { goToChords } = useAppNavigation();
    const [list, setList] = useState<string[]>([]);
    const hasNote = !!Chords[note.charAt(0)];

    if (note.length && !hasNote) {
        goToChords();
    }

    useEffect(() => {
        scrollToTop();
        setList(
            hasNote
                ? Object.keys(Chords).filter((value) => value.charAt(0) === note.charAt(0))
                : Object.keys(Chords)
        );
    }, [note, hasNote]);

    function withThemeClassName(classNames: string) {
        return cn(classNames, { [styles.dark]: theme === Themes.DARK });
    }

    function onChordClick(value: string) {
        history.push(`${ROUTE.CHORDS}/${encodeChord(value)}`);
    }

    return (
        <>
            {hasNote && <p className={withThemeClassName(styles.header)}>{note.charAt(0)}</p>}
            <div className={styles.content}>
                {list.map((name, index) => (
                    <div
                        key={`chord-${index}`}
                        onClick={() => onChordClick(name)}
                        className={withThemeClassName(styles.text)}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ChordList;
