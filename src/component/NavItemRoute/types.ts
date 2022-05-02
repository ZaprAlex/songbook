export interface NavItemProps {
    active?: boolean;
    onClick: () => void;
    dataTestId?: string;
}

export interface NavItemRouteProps extends Partial<NavItemProps> {
    to: string;
    children: string;
}
