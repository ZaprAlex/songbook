import React, { useEffect } from 'react';

import { noop } from '../../../utils/helper';
import { IButton } from '../../../component/Button';
import InformContainer from '../../../component/InformContainer';

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
    const buttonProps: IButton = { size: 'x-large' };

    useEffect(onMount, []);

    return (
        <div className={styles.page}>
            <InformContainer
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
