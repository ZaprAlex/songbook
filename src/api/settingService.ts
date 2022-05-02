import { Themes } from '../constants/Themes';

const THEME_KEY = 'songbook-theme';

export function saveTheme(theme: Themes) {
    window.localStorage.setItem(THEME_KEY, theme);
}
export function getTheme(): Themes {
    const theme = window.localStorage.getItem(THEME_KEY) as Themes | null;
    return theme ? theme : Themes.LIGHT;
}
