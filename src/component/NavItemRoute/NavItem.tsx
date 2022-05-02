import React, { FC } from 'react';
import cn from 'classnames';

import { NavItemProps } from './types';

import styles from './NavItem.module.scss';
import { useTheme } from '../../hooks/useTheme';

const NavItem: FC<NavItemProps> = ({
    active = false,
    onClick,
    dataTestId = 'nav-item',
    children,
}) => {
    const { theme } = useTheme();

    return (
        <div
            className={cn(styles.navItem, styles[theme], {
                [styles.active]: active,
            })}
            onClick={onClick}
            data-test-id={dataTestId}
        >
            {children}
        </div>
    );
};

export default NavItem;
