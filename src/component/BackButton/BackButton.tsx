import React, { FC, useCallback } from 'react';

import { useAppNavigation } from '../Navigation';
import Button from '../Button';
import arrowLeft from '../../static/svgs/arrow-left-black.svg';

import { BackButtonProps } from './types';

const BACK_BUTTON_LABEL = 'Назад';

const BackButton: FC<BackButtonProps> = ({
    onClick,
    dataTestId = 'back-button',
    label = BACK_BUTTON_LABEL,
    adaptive,
}) => {
    const { goBack } = useAppNavigation();
    const backButtonClick = useCallback(() => {
        if (onClick) {
            onClick();
        } else {
            goBack();
        }
    }, [onClick]);

    return (
        <Button
            onClick={backButtonClick}
            label={label}
            adaptive={adaptive}
            type="outline"
            size="small"
            icon={arrowLeft}
            dataTestId={dataTestId}
        />
    );
};

export default BackButton;
