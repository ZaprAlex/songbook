import React, { FC, useCallback } from 'react';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';

import NavItem from './NavItem';
import { NavItemRouteProps } from './types';

const NavItemRoute: FC<NavItemRouteProps> = ({ to, children, onClick, ...rest }) => {
    const history = useHistory();
    const match = useRouteMatch(to);

    const onNavClick = useCallback(() => {
        if (onClick) {
            onClick();
        }

        history.push(to);
    }, [to, onClick]);

    return (
        <NavItem {...rest} active={!!match} onClick={onNavClick}>
            {children}
        </NavItem>
    );
};

export default NavItemRoute;
