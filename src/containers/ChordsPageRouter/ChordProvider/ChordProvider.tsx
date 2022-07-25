import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Chords, IChord } from '../../../constants/chords';
import { goTo404 } from '../../../utils/navigation/navigation';
import { decodeChord } from '../../../utils/stringHelper';
import Chord from '../Chord';

type Params = {
    chordName?: string;
};

const ChordProvider: FC = () => {
    const history = useHistory();
    const { chordName = '' } = useParams<Params>();
    const [chord, setChord] = useState<IChord | null>(null);

    useEffect(() => {
        (async () => {
            const chord = decodeChord(chordName);
            if (Object.keys(Chords).includes(chord)) {
                setChord(Chords[chord]);
            } else {
                goTo404(history);
            }
        })();
    }, [chordName]);

    return chord ? <Chord chord={chord} /> : null;
};

export default ChordProvider;
