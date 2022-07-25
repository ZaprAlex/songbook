import { History } from 'history';

import { ERROR_ROUTE } from '../../constants/route';

export const goTo404 = (history: History) => {
    history.push(ERROR_ROUTE._404);
};

export const goTo500 = (history: History) => {
    history.push(ERROR_ROUTE._500);
};

export const goToCommonError = (history: History) => {
    history.push(ERROR_ROUTE.COMMON);
};

export const getNavFunc = (history: History, path: string) => () => history.push(path);
