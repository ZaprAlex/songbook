export function copyToClipboard(value: string, postCopyCallback?: () => void) {
    try {
        const elem = document.createElement('textarea');
        elem.value = value;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
        postCopyCallback && postCopyCallback();
    } catch (e) {
        console.error(`copy to clipboard failed. ${e}`);
    }
}
