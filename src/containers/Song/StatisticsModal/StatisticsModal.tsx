import React from 'react';
import cn from 'classnames';

import Button from '../../../component/Button';
import Headline from '../../../component/Headline';

import { IStatistic } from './types';

import styles from './StatisticsModal.module.scss';

type IStatisticsModalProps = {
    onClear: () => void;
    onClose: () => void;
    statistics: IStatistic[];
};

const CLOSE_BUTTON = 'button-close';

const StatisticsModal: React.FC<IStatisticsModalProps> = ({ onClear, onClose, statistics }) => {
    const { bestReaction, bestDelay, bestLevel } = statistics.reduce(
        ({ bestReaction, bestLevel, bestDelay }, { reaction, delay, level }) => ({
            bestReaction: Math.min(reaction, bestReaction),
            bestDelay: Math.min(delay, bestDelay),
            bestLevel: Math.max(level, bestLevel),
        }),
        {
            bestReaction: statistics[0].reaction,
            bestDelay: statistics[0].delay,
            bestLevel: statistics[0].level,
        }
    );

    document.getElementById(CLOSE_BUTTON)?.focus();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.body}>
                <Headline text="Statistics" className={styles.headline} />
                <div className={styles.content}>
                    <div className={styles.column}>
                        <div className={cn(styles.ceil, styles.highlighting)}>Reaction (ms)</div>
                        {statistics.map(({ reaction, delay }, index) => (
                            <div
                                className={cn(styles.ceil, {
                                    [styles.low]: reaction > delay * 0.8,
                                    [styles.medium]: reaction > delay * 0.9,
                                    [styles.high]: reaction === bestReaction,
                                })}
                                key={`reaction-${index}`}
                            >
                                {reaction}
                            </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        <div className={cn(styles.ceil, styles.highlighting)}>Delay (ms)</div>
                        {statistics.map(({ delay }, index) => (
                            <div
                                className={cn(styles.ceil, {
                                    [styles.high]: delay === bestDelay,
                                })}
                                key={`delay-${index}`}
                            >
                                {delay}
                            </div>
                        ))}
                    </div>
                    <div className={styles.column}>
                        <div className={cn(styles.ceil, styles.highlighting)}>Level</div>
                        {statistics.map(({ level }, index) => (
                            <div
                                className={cn(styles.ceil, {
                                    [styles.high]: level === bestLevel,
                                })}
                                key={`level-${index}`}
                            >
                                {level}
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    label="Ok"
                    onClick={onClose}
                    type="outline"
                    id={CLOSE_BUTTON}
                    dataTestId={CLOSE_BUTTON}
                    justify
                />
                <Button label="Clear" onClick={onClear} type="outline" dataTestId="clear-button" justify />
            </div>
        </div>
    );
};

export default StatisticsModal;
