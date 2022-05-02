export type IReactionState = {
    best: number;
    level: number;
    delay: number;
};

export enum MessageTypes {
    AWAIT = 'Await',
    FAIL = 'Fail',
}
