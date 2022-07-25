import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import { ROUTE } from '../../constants/route';
import { Themes } from '../../constants/Themes';
import { useTheme } from '../../hooks/useTheme';
import ErrorPage from '../ErrorPage';
import ChordsPageRouter from '../../containers/ChordsPageRouter';
import MainHeader from '../../containers/MainHeader';
import SongsPageRouter from '../../containers/SongsPageRouter';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={cn(styles.page, { [styles.dark]: theme === Themes.DARK })}>
            <MainHeader />
            <Switch>
                <Route path={ROUTE.SONGS} render={() => <SongsPageRouter />} />
                <Route path={ROUTE.CHORDS} render={() => <ChordsPageRouter />} />
                <Route path={ROUTE.ERROR} component={ErrorPage} />
                <Redirect to={ROUTE.SONGS} />
            </Switch>
        </div>
    );
};

export default MainPage;
