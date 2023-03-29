import React, { FC } from 'react';

import { SongsData } from '../../constants/SongsData';

import styles from './AuthorsAlphabetPanel.module.scss';

type Props = {
    onClick: (sign: string) => void;
};

const AuthorsAlphabetPanel: FC<Props> = ({ onClick }) => {
    const alphabet = Array.from(new Set(Object.keys(SongsData).map((author) => author.charAt(0))));
    return (
        <div className={styles.panel}>
            {alphabet.map((sign) => (
                <div key={`sign-${sign}`} className={styles.sign} onClick={() => onClick(sign)}>
                    {sign}
                </div>
            ))}
        </div>
    );
};

export default AuthorsAlphabetPanel;
