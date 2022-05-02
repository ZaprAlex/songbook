import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryHistory } from 'history/createMemoryHistory';

import PageAccessDenied, { PageAccessDeniedProps } from './PageAccessDenied';

describe('PageAccessDenied', () => {
    let history: MemoryHistory;
    const header = 'TestHeader';
    const message = 'TestMessage';
    const buttonLabel = 'TestButtonLabel';
    const onClick = jest.fn();
    const initialProps: PageAccessDeniedProps = {
        header,
    };

    const component = (additionalProps?: PageAccessDeniedProps) =>
        render(
            <Router history={history}>
                <PageAccessDenied {...initialProps} {...additionalProps} />
            </Router>
        );

    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        history = createMemoryHistory();
    });

    test('w/o message and btn', () => {
        const { container } = component();

        expect(screen.queryByText(header)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    test('with message and button', () => {
        const { container } = component({ message, buttonLabel, onClick });

        expect(container.firstChild).toMatchSnapshot();

        expect(screen.queryByText(message)).toBeInTheDocument();
        expect(screen.queryByText(buttonLabel)).toBeInTheDocument();

        fireEvent.click(screen.getByText(buttonLabel));

        expect(onClick).toBeCalled();
    });
});
