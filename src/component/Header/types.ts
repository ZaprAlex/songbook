import { ReactNode } from 'react';

type Position = 'fixed' | 'sticky' | 'relative' | 'static';
type BackgroundColor = 'transparent' | 'white';

export interface HeaderProps {
    renderLeft?: () => ReactNode;
    renderCenter?: () => ReactNode;
    renderRight?: () => ReactNode;
    position?: Position;
    backgroundColor?: BackgroundColor;
    className?: string;
    htmlElement?: HTMLElement;
    onHelpButtonClick?: () => void;
    adaptive?: boolean;
}
