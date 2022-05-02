import React from 'react';

import { useAppNavigation } from '../../../component/Navigation';
import { IButton } from '../../../component/Button';
import InformContainer from '../../../component/InformContainer/InformContainer';
import icon from '../../../static/svgs/not-found.svg';

import styles from '../Errors.module.css';

const CommonError: React.FC = () => {
    const { goBack } = useAppNavigation();
    const buttonProps: IButton = { size: 'x-large' };

    return (
        <div className={styles.page}>
            <InformContainer
                icon={icon}
                header="Что-то пошло не так"
                buttonLabel="Вернуться"
                onClick={() => goBack()}
                contentClassName={styles.content}
                buttonClassName={styles.button}
                buttonProps={buttonProps}
            />
        </div>
    );
};

export default CommonError;
