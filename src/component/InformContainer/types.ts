import { IButton } from '../Button';

export interface IInformContainer {
    icon?: string;
    header: string;
    headerClassName?: string;
    message?: string;
    messageClassName?: string;
    buttonLabel?: string;
    buttonCancelLabel?: string;
    contentClassName?: string;
    buttonClassName?: string;
    buttonCancelClassName?: string;
    onMount?: () => void;
    onClick?: () => void;
    onCancelClick?: () => void;
    buttonCancelProps?: IButton;
    buttonProps?: IButton;
    loading?: boolean;
}
