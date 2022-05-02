import React from 'react';
import renderer from 'react-test-renderer';

import DotsLoader from './DotsLoader';

describe('DotsLoader', () => {
    test('Snap w/o props', () => {
        const component = renderer.create(<DotsLoader />).toJSON();
        expect(component).toMatchSnapshot();
    });

    test('Snap with color prop', () => {
        const component = renderer.create(<DotsLoader color="black" />).toJSON();
        expect(component).toMatchSnapshot();
    });

    test('Snap with color props', () => {
        const component = renderer.create(<DotsLoader color="black" />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
