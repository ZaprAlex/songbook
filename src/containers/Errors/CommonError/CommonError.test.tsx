import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { useAppNavigation } from '../../../component/Navigation';
import CommonError from './CommonError';

jest.mock('../../../component/Navigation');

describe('CommonError', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    const goBack = jest.fn();

    (useAppNavigation as jest.Mock).mockReturnValue({ goBack });

    test('should render', async () => {
        const { container } = render(<CommonError />);

        expect(container.firstChild).toMatchSnapshot();

        fireEvent.click(screen.getByTestId('button-submit'));

        expect(goBack).toHaveBeenCalled();
    });
});
