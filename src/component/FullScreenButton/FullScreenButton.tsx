import React, { FC, useState } from 'react';

import Button from '../Button';
import expandFullscreen from '../../static/svgs/expand-fullscreen.svg';
import exitFullscreen from '../../static/svgs/exit-fullscreen.svg';

const FULL_SCREEN_BUTTON_DATA_TEST_ID = 'full-screen-button';

const FullScreenButton: FC = () => {
    const [fullScreenBtnIcon, setFullScreenBtnIcon] = useState<string>(() =>
        !document.fullscreenElement ? expandFullscreen : exitFullscreen
    );

    async function toggleFullScreen() {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
            setFullScreenBtnIcon(exitFullscreen);
        } else {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
                setFullScreenBtnIcon(expandFullscreen);
            }
        }
    }

    return (
        <Button
            icon={fullScreenBtnIcon}
            onClick={toggleFullScreen}
            size="small"
            dataTestId={FULL_SCREEN_BUTTON_DATA_TEST_ID}
        />
    );
};

export default FullScreenButton;
