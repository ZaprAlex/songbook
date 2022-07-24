import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { useAppNavigation } from '../../../component/Navigation';

import Page404 from './Page404';

jest.mock('../../../component/Navigation');

describe('Page404', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    const goToSongs = jest.fn();

    (useAppNavigation as jest.Mock).mockReturnValue({ goToSongs });

    test('should render', async () => {
        const { container } = render(<Page404 />);

        expect(container.firstChild).toMatchSnapshot();

        fireEvent.click(screen.getByRole('button'));

        expect(goToSongs).toHaveBeenCalled();
    });
});
