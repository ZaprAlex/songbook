export function printTextWithWrap(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    lineHeight: number,
    fitWidth: number
) {
    const words = text.split(' ');
    let line = '';

    words.forEach((word, i) => {
        const tmpLine = line + (i > 0 ? ' ' : '') + word;
        const currWidth = context.measureText(tmpLine).width;

        if (currWidth > fitWidth && i > 0) {
            context.fillText(line, x, y);
            line = word;
            y += lineHeight;
        } else {
            line = tmpLine;
        }
    });

    context.fillText(line, x, y);
}
