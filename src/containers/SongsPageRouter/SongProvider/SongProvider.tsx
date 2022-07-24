import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getSong } from '../../../api/songService';
import { goTo404 } from '../../../utils/navigation/navigation';
import { ISong } from '../../../constants/SongsData';
import Song from '../Song';

type Params = {
    author: string;
    songName: string;
};

const SongProvider: FC = () => {
    const history = useHistory();
    const { author, songName } = useParams<Params>();
    const [song, setSong] = useState<ISong | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getSong(author, songName);
                setSong(res);
            } catch (e) {
                goTo404(history);
            }
        })();
    }, []);

    return song ? <Song author={author} song={song} /> : null;
};

export default SongProvider;
