import { History } from 'history';

import { ERROR_ROUTE } from '../../constants/route';

import { stateLocationType } from './types';

export const goTo404 = (history: History, state?: stateLocationType) => {
    history.push(ERROR_ROUTE._404, state);
};

export const goTo500 = (history: History, state?: stateLocationType) => {
    history.push(ERROR_ROUTE._500, state);
};

export const goToCommonError = (history: History, state?: stateLocationType) => {
    history.push(ERROR_ROUTE.COMMON, state);
};

export const getNavFunc = (history: History, path: string) => (state?: stateLocationType) =>
    history.push(path, state);
