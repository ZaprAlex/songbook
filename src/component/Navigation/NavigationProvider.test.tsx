import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { NavigationProvider } from '.';

describe('NavigationProvider', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<NavigationProvider />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
