import React from 'react';
import cn from 'classnames';

import { HeaderProps } from './types';

import styles from './Header.module.scss';

const Header: React.FC<HeaderProps> = ({
    renderLeft,
    renderCenter,
    renderRight,
    position = 'relative',
    backgroundColor = 'transparent',
    className,
}) => (
    <div
        id="header"
        className={cn(styles.header, styles[position], styles[backgroundColor], className)}
    >
        <div className={styles.slots}>
            <div className={styles.slot}>{renderLeft && renderLeft()}</div>
            <div className={styles.slot}>{renderCenter && renderCenter()}</div>
            <div className={styles.slot}>{renderRight && renderRight()}</div>
        </div>
    </div>
);

export default Header;
