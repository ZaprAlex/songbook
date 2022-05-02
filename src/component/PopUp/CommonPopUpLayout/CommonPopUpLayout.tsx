import React, { FC } from 'react';
import cn from 'classnames';

import Button from '../../Button';

import styles from './CommonPopUpLayout.module.scss';

export type CommonPopUpLayoutProps = {
    onClick: () => void;
    title?: string;
    buttonLabel?: string;
    centered?: boolean;
};

const CommonPopUpLayout: FC<CommonPopUpLayoutProps> = ({
    onClick,
    title,
    buttonLabel = 'Понятно',
    centered = false,
    children,
}) => (
    <div className={cn(styles.content, { [styles.centered]: centered })}>
        {title && <p className={styles.title}>{title}</p>}
        {children}
        <div className={styles.footer}>
            <Button
                label={buttonLabel}
                onClick={onClick}
                type="contained"
                skeuomorph
                size="middle"
                dataTestId="information-close-button"
            />
        </div>
    </div>
);

export default CommonPopUpLayout;
