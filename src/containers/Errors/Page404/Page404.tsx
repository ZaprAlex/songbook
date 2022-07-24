import React from 'react';

import { IButton } from '../../../component/Button';
import { useAppNavigation } from '../../../component/Navigation';
import InformContainer from '../../../component/InformContainer';

import styles from '../Errors.module.css';

const Page404: React.FC = () => {
    const { goToSongs } = useAppNavigation();

    const buttonProps: IButton = { size: 'x-large' };

    return (
        <div className={styles.page}>
            <InformContainer
                header="Страница не найдена"
                message="Попробуйте перейти на главную"
                buttonLabel="На главную"
                onClick={goToSongs}
                contentClassName={styles.content}
                buttonClassName={styles.button}
                buttonProps={buttonProps}
            />
        </div>
    );
};

export default Page404;
