export interface IChord {
    chord: string;
    name: string;
    src: string;
    note: string;
}

export const ChordsList: IChord[] = [
    { chord: 'A', name: 'Ля мажор', src: '../chords/A.png', note: 'A' },
    { chord: 'Am', name: 'Ля минор', src: '../chords/Am.png', note: 'A' },
    { chord: 'A+', name: 'Ля мажор увеличенный', src: '../chords/A+.png', note: 'A' },
    { chord: 'A#', name: 'Ля-диез мажор', src: '../chords/A_.png', note: 'A' },
    {
        chord: 'Amaj7',
        name: 'Большой мажорный септаккорд от ноты Ля',
        src: '../chords/Amaj7.png',
        note: 'A',
    },
    {
        chord: 'Asus4',
        name: 'Ля мажор с квартой вместо терции',
        src: '../chords/Asus4.png',
        note: 'A',
    },
    {
        chord: 'A6',
        name: 'Мажорный секстаккорд от ноты Ля',
        src: '../chords/A6.png',
        note: 'A',
    },
    {
        chord: 'Am6',
        name: 'Минорный секстаккорд от ноты Ля',
        src: '../chords/Am6.png',
        note: 'A',
    },
    {
        chord: 'A7',
        name: 'Доминантсептаккорд (мажорный септаккорд) от ноты Ля',
        src: '../chords/A7.png',
        note: 'A',
    },
    {
        chord: 'Am7',
        name: 'Минорный септаккорд от ноты Ля',
        src: '../chords/Am7.png',
        note: 'A',
    },
    {
        chord: 'A#7',
        name: 'Доминантсептаккорд (мажорный септаккорд) от ноты Ля-диез',
        src: '../chords/A_7.png',
        note: 'A',
    },
    {
        chord: 'Adim7',
        name: 'Уменьшенный септаккорд от ноты Ля',
        src: '../chords/Adim7.png',
        note: 'A',
    },
    {
        chord: 'A7sus4',
        name: 'Мажорный септаккорд с квартой от ноты Ля',
        src: '../chords/A7sus4.png',
        note: 'A',
    },
    {
        chord: 'A7/6',
        name: 'Мажорный септаккорд с секстой от ноты Ля',
        src: '../chords/A7-6.png',
        note: 'A',
    },
    {
        chord: 'A9',
        name: 'Мажорный нонаккорд от ноты Ля',
        src: '../chords/A9.png',
        note: 'A',
    },
    {
        chord: 'Am9',
        name: 'Минорный нонаккорд от ноты Ля',
        src: '../chords/Am9.png',
        note: 'A',
    },
    { chord: 'Cm', name: 'До минор', src: '../chords/Cm.png', note: 'C' },
    { chord: 'C#', name: 'До-диез мажор', src: '../chords/C_.png', note: 'C' },
    { chord: 'Dm', name: 'Ре минор', src: '../chords/Dm.png', note: 'D' },
    { chord: 'F', name: 'Фа мажор', src: '../chords/F.png', note: 'F' },
    { chord: 'Gm', name: 'Соль минор', src: '../chords/Gm.png', note: 'G' },
    { chord: 'G#', name: 'Соль-диез мажор', src: '../chords/G_.png', note: 'G' },
];

export const Chords: Record<string, IChord> = ChordsList.reduce<any>((chords, chordItem) => {
    chords[chordItem.chord] = chordItem;
    return chords;
}, {});
