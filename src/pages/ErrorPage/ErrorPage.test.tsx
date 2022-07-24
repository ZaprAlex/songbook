import React, { FC } from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

import Page404 from '../../containers/Errors/Page404';
import CommonError from '../../containers/Errors/CommonError/CommonError';
import { ERROR_ROUTE, ROUTE } from '../../constants/route';
import ErrorPage from './ErrorPage';

jest.mock('../../containers/Errors/Page404');
jest.mock('../../containers/Errors/CommonError/CommonError');

describe('ErrorPage', () => {
    let history: MemoryHistory;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();

        history = createMemoryHistory();
    });

    const Page404Mock: FC = () => <>Page404</>;
    (Page404 as jest.Mock).mockImplementation(Page404Mock);

    const CommonErrorMock: FC = () => <>CommonError</>;
    (CommonError as jest.Mock).mockImplementation(CommonErrorMock);

    const renderApp = () =>
        render(
            <Router history={history}>
                <ErrorPage />
            </Router>
        );

    test('should render Page404', () => {
        renderApp();

        history.push(ERROR_ROUTE._404);
        expect(screen.getByText('Page404')).toBeInTheDocument();

        history.push(ROUTE.ERROR);
        expect(screen.getByText('Page404')).toBeInTheDocument();
    });

    test('should render CommonError', () => {
        renderApp();

        history.push(ERROR_ROUTE.COMMON);
        expect(screen.getByText('CommonError')).toBeInTheDocument();
    });
});
