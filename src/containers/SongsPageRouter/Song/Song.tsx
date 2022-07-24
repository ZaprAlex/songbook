import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { ModalCtx, OPEN_CHORDS_ROW_MODAL_ACTION } from '../../../reducer/modal';
import { useInterval } from '../../../hooks/useInterval';
import { useTheme } from '../../../hooks/useTheme';
import { scrollToTop } from '../../../utils/helper';
import { CHORD_REGEX_PATTERN, ChordsKeys } from '../../../constants/chords';
import { ROUTE } from '../../../constants/route';
import { Themes } from '../../../constants/Themes';
import { ISong } from '../../../constants/SongsData';
import ModalTypes from '../../../constants/ModalTypes';
import Button from '../../../component/Button';
import expandFullscreen from '../../../static/svgs/expand-fullscreen.svg';
import exitFullscreen from '../../../static/svgs/exit-fullscreen.svg';

import styles from './Song.module.scss';

type SongProps = {
    author: string;
    song: ISong;
};

const { DARK } = Themes;
const DEFAULT_SPEED = 60;
const SPEED_DELTA = 10;
const TIMEOUT = 5;

const Song: FC<SongProps> = ({ author, song: { name, lyrics, speed: defaultSpeed = 0 } }) => {
    const history = useHistory();
    const { dispatch } = useContext(ModalCtx);
    const { theme } = useTheme();
    const [speed, setSpeed] = useState<number>(0);
    const [fullScreenBtnIcon, setFullScreenBtnIcon] = useState<string>(expandFullscreen);
    const [scrollBtnLabel, setScrollBtnLabel] = useState<string>('!');
    const [scrollable, setScrollable] = useState<boolean>(false);
    const [time, setTime] = useState<number>(-1);

    useEffect(() => {
        scrollToTop();
        setSpeed(defaultSpeed);
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

    async function toggleFullScreen() {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
            setFullScreenBtnIcon(exitFullscreen);
        } else {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
                setFullScreenBtnIcon(expandFullscreen);
            }
        }
    }

    function withThemeClassName(className: string) {
        return cn(className, { [styles.dark]: theme === DARK });
    }

    function onChordClick(chordsRow: string) {
        const chords = Array.from(
            new Set(chordsRow.split(/\b/).filter((word) => word.match(CHORD_REGEX_PATTERN)))
        ).filter((chord) => ChordsKeys.includes(chord));
        dispatch({
            type: OPEN_CHORDS_ROW_MODAL_ACTION,
            payload: {
                modalType: ModalTypes.CHORDS_ROW_MODAL,
                chordsRow: chords,
            },
        });
    }

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
                                onClick={() => onChordClick(String(text))}
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
            <div className={styles.buttonsBlock}>
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
                <Button icon={fullScreenBtnIcon} onClick={toggleFullScreen} size="small" />
            </div>
        </>
    );
};

export default Song;
