import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { useInterval } from '../../../hooks/useInterval';
import { useTheme } from '../../../hooks/useTheme';
import { getChordsFromString } from '../../../utils/stringHelper';
import { scrollToTop } from '../../../utils/helper';
import { ROUTE } from '../../../constants/route';
import { Themes } from '../../../constants/Themes';
import { ISong } from '../../../constants/SongsData';
import Button from '../../../component/Button';
import ChordsRowPopUp from '../../../component/ChordsRowPopUp';
import FullScreenButton from '../../../component/FullScreenButton';
import arrowUp from '../../../static/svgs/arrow-up.svg';

import styles from './Song.module.scss';

type SongProps = {
    author: string;
    song: ISong;
};

type ChordsModalState = {
    activeRowChords?: string[];
    isModalOpen?: boolean;
};

const { DARK } = Themes;
const DEFAULT_SPEED = 70;
const SPEED_DELTA = 10;
const TIMEOUT = 5;

const Song: FC<SongProps> = ({ author, song: { name, lyrics, speed: defaultSpeed = 0 } }) => {
    const history = useHistory();
    const { theme } = useTheme();
    const [speed, setSpeed] = useState<number>(0);
    const [scrollBtnLabel, setScrollBtnLabel] = useState<string>('!');
    const [scrollable, setScrollable] = useState<boolean>(false);
    const [{ isModalOpen, activeRowChords }, setIsModalState] = useState<ChordsModalState>({});
    const [time, setTime] = useState<number>(-1);
    const [chords, setChords] = useState<string[]>([]);

    useEffect(() => {
        scrollToTop();
        setSpeed(defaultSpeed);
        let allChords = new Set<string>();
        lyrics.forEach(([line, isChordsRow]) => {
            if (isChordsRow) {
                allChords = new Set([...Array.from(allChords), ...getChordsFromString(line)]);
            }
        });
        setChords(Array.from(allChords));
    }, []);

    useEffect(() => {
        let timeout: number;
        if (time > 0) {
            timeout = window.setTimeout(() => {
                setScrollBtnLabel(String(time - 1));
                setTime((prevState) => prevState - 1);
            }, 500);
        } else if (time === 0) {
            setScrollBtnLabel(String(speed));
            setScrollable(true);
        }
        return () => window.clearTimeout(timeout);
    }, [time]);

    const autoscroll = useCallback(
        () => scrollable && window.scrollBy({ top: 0.5, behavior: 'smooth' }),
        [scrollable]
    );

    const onScrollToTopClick = useCallback(() => {
        setScrollable(false);
        scrollToTop();
    }, []);

    useInterval(autoscroll, DEFAULT_SPEED - speed * SPEED_DELTA);

    const toggleScrollable = async () => {
        if (scrollable) {
            setScrollable(false);
        } else {
            setScrollBtnLabel(String(TIMEOUT));
            setTime(TIMEOUT);
        }
    };

    const increaseSpeed = () => setSpeed((prevValue) => prevValue + 1);

    const decreaseSpeed = () => setSpeed((prevValue) => prevValue - 1);

    const onAuthorClick = () => history.push(`${ROUTE.SONGS}/${author}`);

    function withThemeClassName(className: string) {
        return cn(className, { [styles.dark]: theme === DARK });
    }

    function onChordClick(chordsRow: string) {
        const chords = getChordsFromString(chordsRow);
        setIsModalState({ isModalOpen: true, activeRowChords: chords });
    }

    const onCloseModal = useCallback(() => setIsModalState({}), []);

    return (
        <>
            <div className={styles.content}>
                <p className={withThemeClassName(styles.header)}>
                    <span className={withThemeClassName(styles.author)} onClick={onAuthorClick}>
                        {author}
                    </span>
                    {` - ${name}`}
                </p>
                <div className={styles.lyrics}>
                    {lyrics.map(([text, isChordsRow], index) =>
                        isChordsRow ? (
                            <p
                                key={`row-${index}`}
                                className={withThemeClassName(cn(styles.row, styles.chord))}
                                // onClick={() => onChordClick(String(text))}
                            >
                                {text}
                            </p>
                        ) : (
                            <p key={`row-${index}`} className={withThemeClassName(styles.row)}>
                                {text}
                            </p>
                        )
                    )}
                </div>
            </div>
            <div className={styles.buttonsBlockWrapper}>
                <div className={styles.buttonsBlock}>
                    <div className={styles.buttonsBlockContent}>
                        {scrollable && (
                            <>
                                <Button
                                    label="-"
                                    onClick={decreaseSpeed}
                                    size="small"
                                    disabled={speed <= -5}
                                    className={styles.speed}
                                />
                                <Button
                                    label="+"
                                    onClick={increaseSpeed}
                                    size="small"
                                    disabled={speed >= 5}
                                    className={styles.speed}
                                />
                            </>
                        )}
                        <Button
                            label={scrollable ? String(speed) : scrollBtnLabel}
                            onClick={toggleScrollable}
                            size="small"
                            className={scrollable ? styles.active : ''}
                        />
                        <Button onClick={onScrollToTopClick} size="small" icon={arrowUp} />
                        <FullScreenButton />
                    </div>
                </div>
            </div>
            <ChordsRowPopUp
                isOpen={isModalOpen}
                chords={activeRowChords ?? chords}
                onClose={onCloseModal}
            />
        </>
    );
};

export default Song;
