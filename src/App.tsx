import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE } from './constants/route';
import ContextContainer from './containers/ContextContainer';
import ErrorPage from './pages/error/error';
import SongsPageRouter from './pages/SongsPageRouter';
import PopUp from './component/PopUp';

import styles from './App.module.scss';
import ThemeContextContainer from './containers/ThemeContextContainer';

const App: FC = () => (
    <ThemeContextContainer>
        <ContextContainer>
            <div className={styles.app}>
                <Switch>
                    <Route path={ROUTE.SONGS} render={() => <SongsPageRouter />} />
                    <Route path={ROUTE.ERROR} component={ErrorPage} />
                    <Redirect to={ROUTE.SONGS} />
                </Switch>
                <PopUp />
            </div>
        </ContextContainer>
    </ThemeContextContainer>
);

export default App;
