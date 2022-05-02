import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Headline.module.scss';

type Props = {
    text: string;
    className?: string;
};

const Headline: FC<Props> = ({ text, className }) => <h1 className={cn(styles.text, className)}>{text}</h1>;

export default Headline;
