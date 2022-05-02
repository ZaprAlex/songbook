import React, { FC, useReducer } from 'react';

import { getTheme } from '../api/settingService';
import {
    CHANGE_THEME_ACTION,
    ChangeThemeAction,
    ThemeContext,
    ThemeState,
} from '../component/ThemeContext/ThemeContext';

export function themeReducer(state: ThemeState, action: ChangeThemeAction): ThemeState {
    if (action.type === CHANGE_THEME_ACTION) {
        return { ...state, ...action.payload };
    } else {
        return state;
    }
}

const ThemeContextContainer: FC = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, { theme: getTheme() });
    const contextValue = { state, dispatch } as React.ContextType<typeof ThemeContext>;

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContextContainer;
