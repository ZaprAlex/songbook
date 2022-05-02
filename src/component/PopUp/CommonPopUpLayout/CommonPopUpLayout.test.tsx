import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import CommonPopUpLayout from './CommonPopUpLayout';

describe('CommonPopUpLayout', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
    const onClick = jest.fn();
    const closeButtonDataTestId = 'information-close-button';
    const childrenMock = 'pseudoChildren';
    const testTitle = 'testTitle';
    const testButtonLabel = 'testButtonLabel';

    const component = () =>
        render(
            <CommonPopUpLayout onClick={onClick} title={testTitle} buttonLabel={testButtonLabel}>
                {childrenMock}
            </CommonPopUpLayout>
        );

    it('render with default props', () => {
        const { container } = render(<CommonPopUpLayout onClick={onClick} />);

        expect(container.firstChild).toMatchSnapshot();
        expect(screen.getByText('Понятно')).toBeInTheDocument();
    });

    it('render all', () => {
        const { container } = component();

        expect(container.firstChild).toMatchSnapshot();
        expect(screen.getByText(testTitle)).toBeInTheDocument();
        expect(screen.getByText(childrenMock)).toBeInTheDocument();
        expect(screen.getByText(testButtonLabel)).toBeInTheDocument();
    });

    it('test close btn', () => {
        component();

        const informationCloseButton = screen.getByTestId(closeButtonDataTestId);
        expect(informationCloseButton).toBeInTheDocument();

        fireEvent.click(informationCloseButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
