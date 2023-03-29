import { CHORD_REGEX_PATTERN, ChordsKeys } from '../constants/chords';

/*
 ** Обозначение боя:
 ** ↧/↥ - обычный удар
 ** ⇓/⇑ - сильный удар
 ** ⇂/↾ - заглушка
 ** ⇣/⇡ - пустой удар (не касаясь струн)
 */
export function getChordsFromString(line: string) {
    return Array.from(
        new Set(line.split(/\b/).filter((word) => word.match(CHORD_REGEX_PATTERN)))
    ).filter((chord) => ChordsKeys.includes(chord));
}

export function encodeChord(chord: string) {
    return chord.replaceAll('#', '_').replaceAll('/', '-');
}

export function decodeChord(chord: string) {
    return chord.replaceAll('_', '#').replaceAll('-', '/');
}

export function isChordsRow(line: string): string[] {
    if (line.length) {
        const pattern = new RegExp(CHORD_REGEX_PATTERN);
        return line.match(pattern) ? ['chords_row'] : [];
    }
    return [];
}
