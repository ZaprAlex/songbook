import React from 'react';
import { shallow } from 'enzyme';

import icon from './../../static/svgs/not-found.svg';

import InformContainer, { IInformContainer } from './index';
import styles from './InformContainer.module.css';

const testHeader = 'TestHeader';
const testButtonLabel = 'TestButtonLabel';
const testMessage = 'TestMessage';

test('w/o message and btn', () => {
    const initialProps: IInformContainer = {
        header: testHeader,
        icon: icon,
        contentClassName: styles.content,
    };
    const body = shallow(<InformContainer {...initialProps} />);
    expect(body.find('.header').text()).toEqual(testHeader);
    expect(body.html()).toMatchSnapshot();
});

test('full functionality', () => {
    const buttonCallBack = jest.fn();
    const initialProps: IInformContainer = {
        header: testHeader,
        message: testMessage,
        icon: icon,
        contentClassName: styles.content,
        buttonLabel: testButtonLabel,
        onClick: buttonCallBack,
        buttonClassName: styles.button,
    };
    const body = shallow(<InformContainer {...initialProps} />);
    expect(body.find('.header').text()).toEqual(testHeader);
    expect(body.find('.message').text()).toEqual(testMessage);
    const submitButton = body.find('.button');
    expect(submitButton.props().label).toEqual(testButtonLabel);
    expect(body.html()).toMatchSnapshot();
    submitButton.simulate('click');
    expect(buttonCallBack.mock.calls.length).toEqual(1);
});
