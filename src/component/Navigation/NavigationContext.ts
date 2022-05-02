import React, { useContext } from 'react';

import { INavigation } from '../../utils/navigation/types';

/**
 * Navigation context
 */
export const AppNavigationCtx = React.createContext<INavigation | undefined>(undefined);

const useAppNavigation = () => {
    const appNavigation = useContext(AppNavigationCtx);

    if (typeof appNavigation === 'undefined') {
        throw Error(`Use useAppNavigation() inside <NavigationProvider>`);
    }

    return appNavigation;
};

export default useAppNavigation;
