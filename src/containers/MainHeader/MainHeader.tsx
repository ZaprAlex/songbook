import React, { FC, useContext } from 'react';
import { Themes } from '../../constants/Themes';
import Button from '../../component/Button';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import moon from '../../static/svgs/moon.svg';
import sun from '../../static/svgs/sun.svg';
import { CHANGE_THEME_ACTION, ThemeContext } from '../../component/ThemeContext/ThemeContext';
import { saveTheme } from '../../api/settingService';

const { DARK, LIGHT } = Themes;

const MainHeader: FC = () => {
    const {
        state: { theme },
        dispatch,
    } = useContext(ThemeContext);

    function toggleTheme() {
        if (theme === LIGHT) {
            changeTheme(DARK);
        } else {
            changeTheme(LIGHT);
        }
    }

    const changeTheme = (theme: Themes) => {
        saveTheme(theme);
        dispatch({
            type: CHANGE_THEME_ACTION,
            payload: { theme },
        });
    };

    return (
        <Header
            renderCenter={() => <Navbar />}
            renderRight={() => (
                <Button icon={theme === LIGHT ? moon : sun} onClick={toggleTheme} size="small" />
            )}
        />
    );
};

export default MainHeader;
