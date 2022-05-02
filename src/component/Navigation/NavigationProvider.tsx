import React, { FC, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { ERROR_ROUTE, ROUTE } from '../../constants/route';
import { getNavFunc } from '../../utils/navigation/navigation';
import { AppNavigationCtx } from '.';

const NavigationProvider: FC = ({ children }) => {
    const history = useHistory();

    const goBack = useCallback(() => {
        history.goBack();
    }, []);

    const goRoot = useCallback(getNavFunc(history, ROUTE.SONGS), []);

    const goToSongs = useCallback(getNavFunc(history, ROUTE.SONGS), []);

    const goToChords = useCallback(getNavFunc(history, ROUTE.CHORDS), []);

    const goTo404 = useCallback(getNavFunc(history, ERROR_ROUTE._404), []);

    const goTo500 = useCallback(getNavFunc(history, ERROR_ROUTE._500), []);

    const goToCommonError = useCallback(getNavFunc(history, ERROR_ROUTE.COMMON), []);

    const navigation = useMemo(
        () => ({
            goBack,
            goRoot,
            goToSongs,
            goToChords,
            goTo404,
            goTo500,
            goToCommonError,
        }),
        []
    );

    return <AppNavigationCtx.Provider value={navigation}>{children}</AppNavigationCtx.Provider>;
};

export default NavigationProvider;
