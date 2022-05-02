import React from 'react';
import classNames from 'classnames';

import DotsLoader from '../DotsLoader';
import { WhiteSvgLogo } from '../../utils';

import { IButton } from './types';

import styles from './Button.module.scss';

class Button extends React.PureComponent<IButton> {
    render() {
        const {
            label = '',
            color = 'green',
            icon,
            iconPosition = 'left',
            type = 'outline',
            htmlType = 'button',
            size = 'middle',
            className,
            children,
            skeuomorph = false,
            justify = false,
            disabled = false,
            dataTestId = 'button',
            loading = false,
            ...restProps
        } = this.props;
        const buttonClasses = classNames([
            styles.btn,
            {
                [styles[`btn-${color}`]]: type === 'contained',
                [styles.btnIconOnly]: (!!children || !label) && !!icon,
                [styles[`btn-icon-${iconPosition}`]]: (!!children || !!label) && !!icon,
                [styles[`btn-${type}`]]: type,
                [styles[`btn-${size}`]]: size,
                [styles.btnJustify]: justify,
                [styles.btnSkeuomorph]: type === 'contained' && skeuomorph,
            },
            className,
        ]);

        const iconNode =
            icon &&
            (typeof icon === 'string' ? (
                <img className={styles.btnIcon} src={icon} alt="" />
            ) : (
                <span className={styles.btnIcon}>{icon}</span>
            ));

        const labelNode = (
            <>
                {iconPosition === 'left' && iconNode}
                {label && <span className={styles.buttonLabel}>{label}</span>}
                {iconPosition === 'right' && iconNode}
            </>
        );

        return (
            <button
                {...restProps}
                type={htmlType}
                className={buttonClasses}
                data-test-id={dataTestId}
                disabled={disabled || loading}
            >
                {loading ? (
                    <DotsLoader color={type === 'contained' ? 'white' : 'black'} />
                ) : (
                    children || labelNode
                )}
            </button>
        );
    }
}

export default Button;
