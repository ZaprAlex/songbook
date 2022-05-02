import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { sleep } from '../../utils/helper';
import { copyToClipboard } from '../../utils/copyToClipboard';
import copyIcon from '../../static/svgs/copy-icon.svg';

import { TextJawProps } from './types';
import styles from './TextJaw.module.scss';

const TextJaw: React.FC<TextJawProps> = ({
    text,
    visibleText = text,
    dataTestId = 'text-jaw',
    className = '',
    wrapperClassName,
    onCopyText,
    successMessage,
    inline = true,
}) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        let isMounted = true;

        (async function () {
            await sleep(2);
            isMounted && setShow(false);
        })();

        return () => {
            isMounted = false;
        };
    }, [show]);

    const copyText = () => {
        if (text) {
            copyToClipboard(text, () => {
                setShow(true);
                onCopyText?.(text);
            });
        }
    };

    return (
        <div className={cn(styles.textWrapper, wrapperClassName)} onClick={copyText} data-test-id={dataTestId}>
            <p className={cn(styles.text, className, { [styles.inline]: inline })} ref={textRef}>
                {visibleText}
            </p>
            <img src={copyIcon} alt="" />
            {show && successMessage && (
                <div className={styles.successMsgWrapper} data-test-id="success-modal">
                    <div className={styles.successMsg}>
                        <span>{successMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextJaw;
