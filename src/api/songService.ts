import { ISong, SongsData } from '../constants/SongsData';
import { Chords } from '../constants/chords';

export function isChordsRow(line: string): boolean[] {
    if (line.length) {
        // const pattern = new RegExp(/^([a-z0-9]{5,})$/);

        for (const chord in Chords) {
            if (line.includes(chord)) {
                return [true];
            }
        }
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
        lyrics: lines.map((line) => [!line.length ? '\n' : line, ...isChordsRow(line)]),
    };
}
