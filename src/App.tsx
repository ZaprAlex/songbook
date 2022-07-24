import React, { FC } from 'react';

import ContextContainer from './containers/ContextContainer';
import MainPage from './pages/MainPage';
import PopUp from './component/PopUp';
import { NavigationProvider } from './component/Navigation';
import ThemeContextContainer from './containers/ThemeContextContainer';

import styles from './App.module.scss';

const App: FC = () => (
    <ThemeContextContainer>
        <ContextContainer>
            <NavigationProvider>
                <div className={styles.app}>
                    <MainPage />
                    <PopUp />
                </div>
            </NavigationProvider>
        </ContextContainer>
    </ThemeContextContainer>
);

export default App;
