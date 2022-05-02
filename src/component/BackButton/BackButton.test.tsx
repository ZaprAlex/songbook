import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { AppNavigationCtx } from '../Navigation';

import BackButton from './BackButton';
import { BackButtonProps } from './types';

describe('BackButton ', () => {
    let onClickMock: () => void, navigationMock: any;

    beforeEach(() => {
        onClickMock = jest.fn();
        navigationMock = { goBack: onClickMock };
    });

    const component = (props?: BackButtonProps) =>
        mount(
            <AppNavigationCtx.Provider value={navigationMock}>
                <BackButton {...props} />
            </AppNavigationCtx.Provider>
        );

    it('Is func match snapshot', () => {
        const wrapper = component();
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('onclick test w/o onClick prop', () => {
        const container = component();
        container.find('button').simulate('click');
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('onclick test with onClick prop', () => {
        const props = {
            onClick: onClickMock,
        };
        const container = component(props);
        container.find('button').simulate('click');
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
