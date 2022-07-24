import React, { useEffect } from 'react';
import cn from 'classnames';

import { noop } from '../../utils/helper';
import Button from '../Button';

import { IInformContainer } from './types';

import styles from './InformContainer.module.css';

const InformContainer: React.FC<IInformContainer> = ({
    header,
    headerClassName,
    message,
    messageClassName,
    buttonLabel,
    buttonCancelLabel,
    onMount = noop,
    onClick,
    onCancelClick,
    contentClassName,
    buttonClassName,
    buttonCancelClassName,
    buttonCancelProps,
    buttonProps,
    loading,
}) => {
    useEffect(onMount, []);

    return (
        <div className={cn(styles.content, contentClassName)}>
            <div className={cn(styles.header, headerClassName)}>{header}</div>
            {message && <div className={cn(styles.message, messageClassName)}>{message}</div>}
            <div className={styles.buttonBlock}>
                {onCancelClick && buttonCancelLabel && (
                    <Button
                        {...buttonCancelProps}
                        type="outline"
                        label={buttonCancelLabel}
                        onClick={onCancelClick}
                        className={buttonCancelClassName ?? buttonClassName}
                        dataTestId="button-cancel"
                        loading={loading}
                    />
                )}
                {onClick && buttonLabel && (
                    <Button
                        {...buttonProps}
                        label={buttonLabel}
                        type="contained"
                        skeuomorph
                        onClick={onClick}
                        className={buttonClassName}
                        dataTestId="button-submit"
                        loading={loading}
                    />
                )}
            </div>
        </div>
    );
};

export default InformContainer;
