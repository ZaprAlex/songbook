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

export function printChord() {
    const cnv = document.createElement('canvas');
    cnv.width = 400;
    cnv.height = 350;
    const ctx = cnv.getContext('2d');
    if (!ctx) {
        return;
    }
    ctx.strokeStyle = 'red';
    const w = cnv.width - 1;
    const h = cnv.height - 1;
    const deltaX = 80;
    const deltaY = 50;
    for (let x = -0.5; x < w; x += deltaX) {
        ctx.strokeRect(x, 0, 0.1, h);
    }
    for (let y = -0.5; y < h; y += deltaY) {
        ctx.strokeRect(0, y, w, 0.1);
    }
    document.getElementById('cimg')?.setAttribute('src', cnv.toDataURL());
    // document.getElementById('cdiv')?.clas('src', cnv.toDataURL());
    // сохрнить в рисунок
    // $('#cimg').attr('src', cnv.toDataURL());
    // добавить как фон для div
    // $('#cdiv').css('background-image', "url('" + cnv.toDataURL() + "')");
}
