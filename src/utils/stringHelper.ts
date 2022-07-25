import { CHORD_REGEX_PATTERN, ChordsKeys } from '../constants/chords';

export function getPluralWord(
    word: string,
    number: number,
    one: string,
    two: string,
    five: string
) {
    let suffix = '';
    number %= 100;
    if (number >= 5 && number <= 20) {
        suffix = five;
    } else {
        number %= 10;
        if (number === 1) {
            suffix = one;
        } else {
            if (number >= 2 && number <= 4) {
                suffix = two;
            } else {
                suffix = five;
            }
        }
    }
    return word + suffix;
}

export function getCorrectString(text?: string) {
    return text ? text.replaceAll(' ₽', ' ₽') : text;
}

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
