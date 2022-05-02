export const ROUTE = {
    CORE: '/',
    SONGS: '/songs',
    CHORDS: '/chords',
    ERROR: '/error',
};

const { ERROR } = ROUTE;
//
// export const PAGES = {
//     SONGS: 'songs',
//     CHORDS: 'chords',
//     PROFILE: 'profile',
//     SETTINGS: 'settings',
//     STATISTICS: 'statistics',
// };

export const ERROR_ROUTE = {
    _404: `${ERROR}/404`,
    _500: `${ERROR}/500`,
    _403: `${ERROR}/403`,
    COMMON: `${ERROR}/oops`,
};
