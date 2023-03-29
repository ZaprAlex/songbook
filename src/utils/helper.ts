export function scrollToTop(smooth?: boolean) {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
}

export const ieDetector = () => navigator.userAgent.includes('.NET');

export function noop() {}

export function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, 1000 * time));
}

export function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
