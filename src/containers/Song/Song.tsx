import React, { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { ModalCtx, OPEN_CHORDS_ROW_MODAL_ACTION } from '../../reducer/modal';
import { useTheme } from '../../hooks/useTheme';
import { scrollToTop } from '../../utils/helper';
import { ROUTE } from '../../constants/route';
import { Themes } from '../../constants/Themes';
import { CHORDS_ROW, Songs } from '../../constants/Songs';
import ModalTypes from '../../constants/ModalTypes';
import Button from '../../component/Button';
import MainHeader from '../MainHeader/MainHeader';
import expandFullscreen from '../../static/svgs/expand-fullscreen.svg';
import exitFullscreen from '../../static/svgs/exit-fullscreen.svg';

import styles from './Song.module.scss';

const { DARK } = Themes;
const DEFAULT_SPEED = 60;
const SPEED_DELTA = 10;
const song = Songs[0];

const Song: FC = () => {
    const history = useHistory();
    const { dispatch } = useContext(ModalCtx);
    const [speed, setSpeed] = useState<number>(song.speed ?? 0);
    const { theme } = useTheme();
    const [fullScreenBtnIcon, setFullScreenBtnIcon] = useState<string>(expandFullscreen);
    const [scrollable, setScrollable] = useState<boolean>(false);

    useEffect(scrollToTop, []);

    useEffect(() => {
        let timeout: number;
        if (scrollable) {
            timeout = window.setInterval(() => {
                window.scrollBy(0, 0.5);
            }, DEFAULT_SPEED - speed * SPEED_DELTA);
        }
        return () => window.clearInterval(timeout);
    }, [scrollable, speed]);

    const toggleScrollable = () => setScrollable((prevValue) => !prevValue);

    const increaseSpeed = () => setSpeed((prevValue) => prevValue + 1);

    const decreaseSpeed = () => setSpeed((prevValue) => prevValue - 1);

    const onAuthorClick = () => history.push(`${ROUTE.SONGS}/${song.author}`);

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
        const words = new Set(chordsRow.split(' '));
        words.delete('');
        dispatch({
            type: OPEN_CHORDS_ROW_MODAL_ACTION,
            payload: { modalType: ModalTypes.CHORDS_ROW_MODAL, chordsRow: Array.from(words) },
        });
    }

    return (
        <div className={withThemeClassName(styles.page)}>
            <MainHeader />
            <div className={styles.content}>
                <p className={withThemeClassName(styles.header)}>
                    <span className={withThemeClassName(styles.author)} onClick={onAuthorClick}>
                        {song.author}
                    </span>
                    {` - ${song.name}`}
                </p>
                <div className={styles.lyrics}>
                    {song.lyrics.map(([value, type], index) =>
                        type === CHORDS_ROW ? (
                            <p
                                key={`row-${index}`}
                                className={withThemeClassName(cn(styles.row, styles.chord))}
                                onClick={() => onChordClick(value)}
                            >
                                {value}
                            </p>
                        ) : (
                            <p key={`row-${index}`} className={withThemeClassName(styles.row)}>
                                {value}
                            </p>
                        )
                    )}
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <Button
                    label={`${speed}`}
                    onClick={toggleScrollable}
                    size="small"
                    className={scrollable ? styles.active : ''}
                />
                {scrollable && (
                    <div>
                        <Button
                            label="-"
                            onClick={decreaseSpeed}
                            size="small"
                            disabled={speed <= -7}
                            className={styles.speed}
                        />
                        <Button
                            label="+"
                            onClick={increaseSpeed}
                            size="small"
                            disabled={speed >= 7}
                            className={styles.speed}
                        />
                    </div>
                )}
                <Button icon={fullScreenBtnIcon} onClick={toggleFullScreen} size="small" />
            </div>
        </div>
    );
};

export default Song;
