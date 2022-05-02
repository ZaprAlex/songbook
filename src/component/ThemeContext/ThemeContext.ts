import React from 'react';

import { Themes } from '../../constants/Themes';
import { getTheme } from '../../api/settingService';

export const CHANGE_THEME_ACTION = 'CHANGE_THEME_ACTION';

export type ThemeState = {
    theme: Themes;
};

export type ChangeThemeAction = {
    type: typeof CHANGE_THEME_ACTION;
    payload: {
        theme: ThemeState['theme'];
    };
};

export interface ThemeContext extends React.Context<any> {
    state: ThemeState;
    dispatch: React.Dispatch<ChangeThemeAction>;
}

export const ThemeContext = React.createContext<ThemeContext>({
    state: { theme: getTheme() },
} as ThemeContext);
