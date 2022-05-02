import React from 'react';
import cn from 'classnames';

import styles from './DotsLoader.module.css';

type Props = {
    color?: 'white' | 'black';
};

const DotsLoader: React.FC<Props> = ({ color = 'white' }) => (
    <div className={cn(styles.dotLoader, { [styles[color]]: true })}>
        <div />
        <div />
        <div />
    </div>
);

export default DotsLoader;
