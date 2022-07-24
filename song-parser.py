#!/usr/bin/python3

import json
import os
import sys
import mimetypes

COLOR_RED = '\033[91m'
COLOR_GREEN = '\033[32m'
COLOR_BLUE = '\033[34m'
COLOR_NORMAL = '\033[0m'

# A substring containing a part of the file path to form a relative path from the base directory {path} in the database
src_dir = os.path.sep

extensionList = ['txt']  # only these file types will be uploaded

song_map = {}

def parse_file(file):
    global song_map
    extension = os.path.splitext(file)[1][1:]
    if extension in extensionList:
        try:
            filename = os.path.basename(file)
            parts = str(filename).split(' - ')
            author = parts[0].strip()
            name = parts[1].split('.txt')[0].strip()
            if author not in song_map:
                song_map[author] = {}
            song_map[author][name] = {}
            song_map[author][name]['path'] = filename
        except Exception as e:
            print(file, COLOR_RED, '\n', e, COLOR_NORMAL, sep=' ')


""" Directory recursive function """
def parse_all_files_in_dir(root_path):
    with os.scandir(root_path) as entries:
        for entry in entries:
            if entry.is_file():
                parse_file(os.path.join(root_path, entry.name))
            elif os.path.isdir(entry):
                parse_all_files_in_dir(os.path.join(root_path, entry.name))


def print_usage():
    print('usage:  ', COLOR_BLUE, 'python3  song-parser.py  ',
          COLOR_GREEN, '{path}', COLOR_BLUE, '  [-h]', COLOR_NORMAL, sep='')
    print(COLOR_GREEN, '{path}', COLOR_NORMAL,
          '  -  base directory for uploading files. For example: \'../nginx/data\'.', sep='')
    print(COLOR_BLUE, '-h', COLOR_NORMAL, '  -  to print usage;', sep='')


def main(av):
    global src_dir
    global server_url
    global access_key
    path = None

    default_songs_path = os.path.join(os.getcwd(), 'public', 'songs')
    destination_path = os.path.join(os.getcwd(), 'src/constants/songs.json')
    if len(av) == 0:
        print('parse songs from default directory - \'', default_songs_path, '\'', sep='')
    else:
        for arg in av:
            if arg.startswith('-'):
                for ch in arg:
                    if ch == 'h':
                        print_usage()
                        return None
            else:
                tmp_path = os.path.abspath(os.path.expanduser(arg))
                if os.path.isdir(tmp_path) or os.path.isfile(tmp_path):
                    path = tmp_path
                else:
                    print(COLOR_RED, 'Invalid path \'', arg, '\' ', COLOR_NORMAL, sep='')
                    print_usage()
                    return None
    if path is not None:
        if os.path.isdir(path):  # If {path} is a directory, for example: './public/songs'
            print('base directory: ', path, sep='')
            src_dir = path + os.path.sep
            parse_all_files_in_dir(path)
    elif os.path.isdir(default_songs_path):
        parse_all_files_in_dir(default_songs_path)
    sorted_list = {}
    for author in sorted(song_map):
        sorted_list[author] = {}
        for song in sorted(song_map[author]):
            sorted_list[author][song] = song_map[author][song]
#     print(sorted_list)
    with open(destination_path, 'w') as f:
        json.dump(sorted_list, f)
        print('write json data to file \'', destination_path, '\'', sep='')


if __name__ == "__main__":
    main(sys.argv[1:])
