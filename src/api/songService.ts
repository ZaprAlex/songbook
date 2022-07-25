import { ISong, SongsData } from '../constants/SongsData';
import { CHORD_REGEX_PATTERN } from '../constants/chords';

export function isChordsRow(line: string): string[] {
    if (line.length) {
        const pattern = new RegExp(CHORD_REGEX_PATTERN);
        return line.match(pattern) ? ['chords_row'] : [];
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
