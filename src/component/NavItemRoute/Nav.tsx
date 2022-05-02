import React, { FC } from 'react';
import styles from './Nav.module.scss';

const Nav: FC = ({ children }) => <div className={styles.nav}>{children}</div>;

export default Nav;
