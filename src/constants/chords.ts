/**
 * Оригинальная регулярка:
 * /\b[A-G][b#]?(maj|min|m|M|\+|-|dim|aug)?\d*(sus)?\d*(\/[A-G][b#]?)?\b/g
 * Убран блок 'M' (так как в оригинальной отлавливалось в тексте 'FM') и добавлен блок для определения Cadd9
 * Как не отлавливать артикль и форму глагола to be ("Am I")?
 */
export const CHORD_REGEX_PATTERN =
    /\b[A-H][b#]?(maj|min|m|\+|-|dim|aug|add)?\d*(sus)?\d*(\/[A-G][b#]?)?\b/g;

export interface IChord {
    chord: string;
    name: string;
    src: string;
}

export type IChordsList = Record<string, IChord[]>;

/**
 * Для передачи в url некоторые символы в названии аккорда заменены:
 * - символ '/' заменен на '-'.
 * - символ '#' заменен на '_'.
 */
export const ChordsList: IChordsList = {
    A: [
        { chord: 'A', name: 'Ля мажор', src: 'A.png' },
        { chord: 'Am', name: 'Ля минор', src: 'Am.png' },
        { chord: 'A+', name: 'Ля мажор увеличенный', src: 'A+.png' },
        { chord: 'A#', name: 'Ля-диез мажор', src: 'A_.png' },
        {
            chord: 'Amaj7',
            name: 'Большой мажорный септаккорд от ноты Ля',
            src: 'Amaj7.png',
        },
        {
            chord: 'Asus4',
            name: 'Ля мажор с квартой вместо терции',
            src: 'Asus4.png',
        },
        {
            chord: 'A6',
            name: 'Мажорный секстаккорд от ноты Ля',
            src: 'A6.png',
        },
        {
            chord: 'Am6',
            name: 'Минорный секстаккорд от ноты Ля',
            src: 'Am6.png',
        },
        {
            chord: 'A7',
            name: 'Доминантсептаккорд (мажорный септаккорд) от ноты Ля',
            src: 'A7.png',
        },
        {
            chord: 'Am7',
            name: 'Минорный септаккорд от ноты Ля',
            src: 'Am7.png',
        },
        {
            chord: 'A#7',
            name: 'Доминантсептаккорд (мажорный септаккорд) от ноты Ля-диез',
            src: 'A_7.png',
        },
        {
            chord: 'Adim7',
            name: 'Уменьшенный септаккорд от ноты Ля',
            src: 'Adim7.png',
        },
        {
            chord: 'A7sus4',
            name: 'Мажорный септаккорд с квартой от ноты Ля',
            src: 'A7sus4.png',
        },
        {
            chord: 'A7/6',
            name: 'Мажорный септаккорд с секстой от ноты Ля',
            src: 'A7-6.png',
        },
        {
            chord: 'A9',
            name: 'Мажорный нонаккорд от ноты Ля',
            src: 'A9.png',
        },
        {
            chord: 'Am9',
            name: 'Минорный нонаккорд от ноты Ля',
            src: 'Am9.png',
        },
    ],
    C: [
        { chord: 'C', name: 'До мажор', src: 'C.png' },
        { chord: 'C+', name: 'До мажор увеличенный', src: 'C+.png' },
        { chord: 'Cm', name: 'До минор', src: 'Cm.png' },
        { chord: 'C#', name: 'До-диез мажор', src: 'C_.png' },
        { chord: 'C#m', name: 'До-диез минор', src: 'C_m.png' },
        { chord: 'C#+', name: 'До-диез мажор увеличенный', src: 'C_+.png' },
        { chord: 'Cmaj7', name: 'Большой мажорный септаккорд от ноты До', src: 'Cmaj7.png' },
        { chord: 'C#maj7', name: 'Большой мажорный септаккорд от ноты До-диез', src: 'C_maj7.png' },
        { chord: 'Csus4', name: 'До мажор с квартой вместо терции', src: 'Csus4.png' },
        { chord: 'C#sus4', name: 'До-диез мажор с квартой вместо терции', src: 'C_sus4.png' },
        { chord: 'C6', name: 'Мажорный секстаккорд от ноты До', src: 'C6.png' },
        { chord: 'Cm6', name: 'Минорный секстаккорд от ноты До', src: 'Cm6.png' },
        { chord: 'C#6', name: 'Мажорный секстаккорд от ноты До-диез', src: 'C_6.png' },
        { chord: 'C#m6', name: 'Минорный секстаккорд от ноты До-диез', src: 'C_m6.png' },
        { chord: 'C7', name: 'Мажорный септаккорд (доминантсептаккорд) от ноты До', src: 'C7.png' },
        { chord: 'Cm7', name: 'Минорный септаккорд от ноты До', src: 'Cm7.png' },
        {
            chord: 'C#7',
            name: 'Мажорный септаккорд (доминантсептаккорд) от ноты До-диез',
            src: 'C_7.png',
        },
        { chord: 'C#m7', name: 'Минорный септаккорд от ноты До-диез', src: 'C_m7.png' },
        { chord: 'Cdim7', name: 'Уменьшенный септаккорд от ноты До', src: 'Cdim7.png' },
        { chord: 'C#dim7', name: 'Уменьшенный септаккорд от ноты До-диез', src: 'C_dim7.png' },
        { chord: 'C7sus4', name: 'Мажорный септаккорд с квартой от ноты До', src: 'C7sus4.png' },
        {
            chord: 'C#7sus4',
            name: 'Мажорный септаккорд с квартой от ноты До-диез',
            src: 'C_7sus4.png',
        },
        { chord: 'C7/6', name: 'Мажорный септаккорд с секстой от ноты До', src: 'C7-6.png' },
        { chord: 'C#7/6', name: 'Мажорный септаккорд с секстой от ноты До-диез', src: 'C_7-6.png' },
        { chord: 'C9', name: 'Мажорный нонаккорд от ноты До', src: 'C9.png' },
        { chord: 'Cm9', name: 'Минорный нонаккорд от ноты До', src: 'Cm9.png' },
        { chord: 'C#9', name: 'Мажорный нонаккорд от ноты До-диез', src: 'C_9.png' },
        { chord: 'C#m9', name: 'Минорный нонаккорд от ноты До-диез', src: 'C_m9.png' },
    ],
    D: [
        { chord: 'D', name: 'Ре мажор', src: 'D.png' },
        { chord: 'Dm', name: 'Ре минор', src: 'Dm.png' },
        { chord: 'D+', name: 'Ре мажор увеличенный', src: 'D+.png' },
        { chord: 'D#', name: 'Ре-диез мажор', src: 'D_.png' },
        { chord: 'D#m', name: 'Ре-диез минор', src: 'D_m.png' },
        { chord: 'D#+', name: 'Ре-диез мажор увеличенный', src: 'D_+.png' },
        { chord: 'Dmaj7', name: 'Большой мажорный септаккорд от ноты Ре', src: 'Dmaj7.png' },
        { chord: 'D#maj7', name: 'Большой мажорный септаккорд от ноты Ре-диез', src: 'D_maj7.png' },
        { chord: 'Ddim', name: 'Уменьшенный аккорд от ноты Ре', src: 'Ddim.png' },
        { chord: 'D#dim', name: 'Уменьшенный аккорд от ноты Ре-диез', src: 'D_dim.png' },
        { chord: 'Dsus4', name: 'Ре мажор с квартой вместо терции', src: 'Dsus4.png' },
        { chord: 'D#sus4', name: 'Ре-диез мажор с квартой вместо терции', src: 'D_sus4.png' },
        { chord: 'D6', name: 'Мажорный секстаккорд от ноты Ре', src: 'D6.png' },
        { chord: 'Dm6', name: 'Минорный секстаккорд от ноты Ре', src: 'Dm6.png' },
        { chord: 'D#6', name: 'Мажорный секстаккорд от ноты Ре-диез', src: 'D_6.png' },
        { chord: 'D#m6', name: 'Минорный секстаккорд от ноты Ре-диез', src: 'D_m6.png' },
        { chord: 'D7', name: 'Мажорный септаккорд (Доминантсептаккорд) от ноты Ре', src: 'D7.png' },
        { chord: 'Dm7', name: 'Минорный септаккорд от ноты Ре', src: 'Dm7.png' },
        {
            chord: 'D#7',
            name: 'Мажорный септаккорд (Доминантсептаккорд) от ноты Ре-диез',
            src: 'D_7.png',
        },
        { chord: 'D#m7', name: 'Минорный септаккорд от ноты Ре-диез', src: 'D_m7.png' },
        { chord: 'Ddim7', name: 'Уменьшенный септаккорд от ноты Ре', src: 'Ddim7.png' },
        { chord: 'D#dim7', name: 'Уменьшенный септаккорд от ноты Ре-диез', src: 'D_dim7.png' },
        { chord: 'D7sus4', name: 'Мажорный септаккорд с квартой от ноты Ре', src: 'D7sus4.png' },
        {
            chord: 'D#7sus4',
            name: 'Мажорный септаккорд с квартой от ноты Ре-диез',
            src: 'D_7sus4.png',
        },
        { chord: 'D7/6', name: 'Мажорный септаккорд с секстой от ноты Ре', src: 'D7-6.png' },
        { chord: 'D#7/6', name: 'Мажорный септаккорд с секстой от ноты Ре-диез', src: 'D_7-6.png' },
        { chord: 'D9', name: 'Мажорный нонаккорд от ноты Ре', src: 'D9.png' },
        { chord: 'Dm9', name: 'Минорный нонаккорд от ноты Ре', src: 'Dm9.png' },
        { chord: 'D#9', name: 'Мажорный нонаккорд от ноты Ре-диез', src: 'D_9.png' },
        { chord: 'D#m9', name: 'Минорный нонаккорд от ноты Ре-диез', src: 'D_m9.png' },
    ],
    E: [
        { chord: 'E', name: 'Ми мажор', src: 'E.png' },
        { chord: 'Em', name: 'Ми минор', src: 'Em.png' },
        { chord: 'E+', name: 'Ми мажор увеличенный', src: 'E+.png' },
        { chord: 'Emaj7', name: 'Большой мажорный септаккорд от ноты Ми', src: 'Emaj7.png' },
        { chord: 'Edim', name: 'Уменьшенный аккорд от ноты Ми', src: 'Edim.png' },
        { chord: 'Esus4', name: 'Ми мажор с квартой вместо терции', src: 'Esus4.png' },
        { chord: 'E6', name: 'Мажорный секстаккорд от ноты Ми', src: 'E6.png' },
        { chord: 'Em6', name: 'Минорный секстаккорд от ноты Ми', src: 'Em6.png' },
        { chord: 'E7', name: 'Мажорный септаккорд (Доминантсептаккорд) от ноты Ми', src: 'E7.png' },
        { chord: 'Em7', name: 'Минорный септаккорд от ноты Ми', src: 'Em7.png' },
        { chord: 'Edim7', name: 'Уменьшенный септаккорд от ноты Ми', src: 'Edim7.png' },
        { chord: 'E7sus4', name: 'Мажорный септаккорд с квартой от ноты Ми', src: 'E7sus4.png' },
    ],
    F: [{ chord: 'F', name: 'Фа мажор', src: 'F.png' }],
    G: [
        { chord: 'Gm', name: 'Соль минор', src: 'Gm.png' },
        { chord: 'G#', name: 'Соль-диез мажор', src: 'G_.png' },
    ],
    H: [],
};

export const Chords: Record<string, IChord> = Object.keys(ChordsList).reduce<any>(
    (chords, note) => {
        ChordsList[note.charAt(0)].forEach((elem) => {
            chords[elem.chord] = elem;
        });
        return chords;
    },
    {}
);

export const ChordsKeys = Object.keys(Chords);
