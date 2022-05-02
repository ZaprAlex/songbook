import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import { noop } from '../../../utils/helper';
import { stateLocationType } from '../../../utils/navigation/types';
import { IButton } from '../../../component/Button';
import InformContainer from '../../../component/InformContainer';
import icon from '../../../static/images/empty.png';

import styles from '../Errors.module.css';

export interface PageAccessDeniedProps {
    header?: string;
    message?: string;
    buttonLabel?: string;
    onClick?: () => void;
    onMount?: () => void;
}

const PageAccessDenied: React.FC<PageAccessDeniedProps> = ({
    onClick,
    header = 'Access denied',
    message,
    buttonLabel,
    onMount = noop,
}) => {
    const { state }: stateLocationType = useLocation();
    const buttonProps: IButton = { size: 'x-large' };

    if (!isEmpty(state)) {
        onClick = state.onClick ? state.onClick : onClick;
        header = state.header ? state.header : header;
        message = state.message ? state.message : message;
        buttonLabel = state.buttonLabel ? state.buttonLabel : buttonLabel;
    }

    useEffect(onMount, []);

    return (
        <div className={styles.page}>
            <InformContainer
                icon={icon}
                header={header}
                message={message}
                contentClassName={styles.content}
                {...(buttonLabel && onClick
                    ? {
                          buttonLabel,
                          onClick,
                          buttonClassName: styles.button,
                          buttonProps,
                      }
                    : {})}
            />
        </div>
    );
};

export default PageAccessDenied;
