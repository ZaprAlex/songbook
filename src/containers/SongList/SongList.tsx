import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import song from '../../static/songs/test.json';
import { ROUTE } from '../../constants/route';
import Button from '../../component/Button';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import expandFullscreen from '../../static/svgs/expand-fullscreen.svg';
import exitFullscreen from '../../static/svgs/exit-fullscreen.svg';
import moon from '../../static/svgs/moon.svg';
import sun from '../../static/svgs/sun.svg';

import styles from './Song.module.scss';

enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const DEFAULT_SPEED = 900;
const { DARK, LIGHT } = Theme;

const SongList: FC = () => {
    const history = useHistory();
    const [speed, setSpeed] = useState<number>(DEFAULT_SPEED);
    const [theme, setTheme] = useState<Theme>(LIGHT);
    const [fullScreenBtnIcon, setFullScreenBtnIcon] = useState<string>(expandFullscreen);

    function onAuthorClick() {
        history.push(`${ROUTE.SONGS}/${song.author}`);
    }

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

    function toggleTheme() {
        if (theme === LIGHT) {
            setTheme(DARK);
        } else {
            setTheme(LIGHT);
        }
    }

    function withThemeClassName(className: string) {
        return cn(className, { [styles.dark]: theme === DARK });
    }

    return (
        <div className={withThemeClassName(styles.page)}>
            <Header
                renderCenter={() => <Navbar />}
                renderRight={() => (
                    <Button
                        icon={theme === LIGHT ? moon : sun}
                        onClick={toggleTheme}
                        size="small"
                    />
                )}
            />
            <div className={styles.content}>
                <p className={withThemeClassName(styles.header)}>
                    <span onClick={onAuthorClick}>{song.author}</span>
                    {` - ${song.name}`}
                </p>
                <div className={styles.lyrics}>
                    {song.lyrics.map((row, index) => (
                        <p key={`row-${index}`} className={withThemeClassName(styles.row)}>
                            {row}
                        </p>
                    ))}
                </div>
            </div>
            <Button
                className={styles.buttonFullScreen}
                icon={fullScreenBtnIcon}
                onClick={toggleFullScreen}
                size="small"
            />
        </div>
    );
};

export default SongList;
