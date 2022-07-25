import React, { FC } from 'react';

import ContextContainer from './containers/ContextContainer';
import MainPage from './pages/MainPage';
import { NavigationProvider } from './component/Navigation';
import ThemeContextContainer from './containers/ThemeContextContainer';

import styles from './App.module.scss';

const App: FC = () => (
    <ThemeContextContainer>
        <ContextContainer>
            <NavigationProvider>
                <div className={styles.app}>
                    <MainPage />
                </div>
            </NavigationProvider>
        </ContextContainer>
    </ThemeContextContainer>
);

export default App;
