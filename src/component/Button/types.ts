import React from 'react';

export type ButtonActionTypes = 'button' | 'submit' | 'reset';
export type ButtonTypes = 'contained' | 'outline' | 'text';
export type ButtonSizes = 'small' | 'middle' | 'large' | 'x-large';
export type ButtonTypeColor = 'green';
export type ButtonIconPosition = 'left' | 'right';

export interface IButton {
    id?: string;
    label?: string;
    color?: ButtonTypeColor;
    icon?: string | React.ReactNode;
    iconPosition?: ButtonIconPosition;
    htmlType?: ButtonActionTypes;
    type?: ButtonTypes;
    size?: ButtonSizes;
    adaptive?: boolean;
    skeuomorph?: boolean;
    justify?: boolean;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    dataTestId?: string;
}
