export interface TextJawProps {
    text: string;
    visibleText?: string;
    className?: string;
    wrapperClassName?: string;
    dataTestId?: string;
    onCopyText?: (text: string) => void;
    successMessage?: string;
    inline?: boolean;
}
