import React, { FC } from 'react';

import NavItemRoute from '../NavItemRoute/NavItemRoute';
import { ROUTE } from '../../constants/route';

import styles from './Navbar.module.css';

const Navbar: FC = () => (
    <div className={styles.block}>
        <NavItemRoute to={ROUTE.SONGS} dataTestId="nav-item-songs">
            Lyrics
        </NavItemRoute>
        <NavItemRoute to={ROUTE.CHORDS} dataTestId="nav-item-chords">
            Chords
        </NavItemRoute>
    </div>
);

export default Navbar;
