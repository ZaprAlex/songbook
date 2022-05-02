import React from 'react';
import { render, screen } from '@testing-library/react';

import TextJaw from './TextJaw';

describe('TextJaw', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    test('snap default', () => {
        const props = { text: 'PROMO_CODE' };

        const { container } = render(<TextJaw {...props} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('snap with props', () => {
        const onClick = jest.fn();
        const dataTestId = 'promo-code-jaw';
        const successMessage = 'Промокод скопирован';
        const props = { text: 'PROMO_CODE', successMessage, onClick, dataTestId };

        render(<TextJaw {...props} />);

        expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
});
