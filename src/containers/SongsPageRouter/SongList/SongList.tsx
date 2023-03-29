import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import cn from 'classnames';

import { SongsData } from '../../../constants/SongsData';
import { ROUTE } from '../../../constants/route';
import { useTheme } from '../../../hooks/useTheme';
import { scrollToTop } from '../../../utils/helper';
import { Themes } from '../../../constants/Themes';

import styles from './SongList.module.scss';
import { useAppNavigation } from '../../../component/Navigation';
import AuthorsAlphabetPanel from '../../../component/AuthorsAlphabetPanel';

type Params = {
    author?: string;
};

const SongList: FC = () => {
    const history = useHistory();
    const { theme } = useTheme();
    const { author = '' } = useParams<Params>();
    const { goToSongs } = useAppNavigation();
    const hasAuthor = !!SongsData[author];
    const [filteredAuthors, setFilteredAuthors] = useState<string[]>(Object.keys(SongsData));

    if (author.length && !hasAuthor) {
        goToSongs();
    }

    if (author.length && hasAuthor && Object.keys(SongsData[author]).length === 1) {
        onSongClick(Object.keys(SongsData[author])[0]);
    }

    useEffect(scrollToTop, []);

    function withThemeClassName(classNames: string) {
        return cn(classNames, { [styles.dark]: theme === Themes.DARK });
    }

    function onSongClick(name: string) {
        history.push(`${ROUTE.SONGS}/${author}/${name}`);
    }

    function onSignClick(sign: string) {
        setFilteredAuthors(Object.keys(SongsData).filter((author) => author.startsWith(sign)));
    }

    function onAuthorClick(value: string) {
        history.push(`${ROUTE.SONGS}/${value}`);
    }

    return (
        <>
            <AuthorsAlphabetPanel onClick={onSignClick} />
            {hasAuthor && <p className={withThemeClassName(styles.header)}>{author}</p>}
            <div className={styles.content}>
                {hasAuthor
                    ? Object.keys(SongsData[author]).map((name, index) => (
                          <div
                              key={`song-${index}`}
                              onClick={() => onSongClick(name)}
                              className={withThemeClassName(styles.text)}
                          >
                              {name}
                          </div>
                      ))
                    : filteredAuthors.map((value, index) => (
                          <div
                              key={`song-${index}`}
                              onClick={() => onAuthorClick(value)}
                              className={withThemeClassName(styles.text)}
                          >
                              {value}
                          </div>
                      ))}
            </div>
        </>
    );
};

export default SongList;
