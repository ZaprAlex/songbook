import { useContext } from 'react';

import { getTheme } from '../api/settingService';
import { ThemeContext } from '../component/ThemeContext/ThemeContext';

export const useTheme = () => {
    const {
        state: { theme },
    } = useContext(ThemeContext);

    return { theme: theme || getTheme() };
};
