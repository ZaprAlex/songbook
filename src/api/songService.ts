import { ISong, SongsData } from '../constants/SongsData';

// TODO: оригинальная регулярка отлавливала в тексте 'FM'
// const CHORD_REGEX_PATTERN = /\b[A-G][b#]?(maj|min|m|M|\+|-|dim|aug)?\d*(sus)?\d*(\/[A-G][b#]?)?\b/g;
const CHORD_REGEX_PATTERN = /\b[A-G][b#]?(maj|min|m|\+|-|dim|aug)?\d*(sus)?\d*(\/[A-G][b#]?)?\b/g;

export function isChordsRow(line: string): boolean[] {
    if (line.length) {
        const pattern = new RegExp(CHORD_REGEX_PATTERN);
        return line.match(pattern) ? [true] : [];
    }
    return [];
}

export async function getSong(author: string, name: string): Promise<ISong> {
    if (!SongsData[author]?.[name]) {
        return Promise.reject();
    }

    const path = `/songs/${SongsData[author][name].path}`;

    const file = await fetch(path);
    const text = await file.text();
    const lines = text.split('\n');

    return {
        name,
        lyrics: lines.map((line) => {
            if (line === `${author} - ${name}`) {
                return [];
            }
            return [!line.length ? '\n' : line, ...isChordsRow(line)];
        }),
    };
}
