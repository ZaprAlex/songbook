import songsJsonData from './songs.json';

type ISongRow = string[];

export interface ISong {
    name: string;
    lyrics: ISongRow[];
    speed?: number;
}

export interface IStoredSong {
    path: string;
    speed?: number;
}

type ISongList = Record<string, IStoredSong>;

type IStoredSongs = Record<string, ISongList>;

export const SongsData: IStoredSongs = songsJsonData;
