import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE } from '../../constants/route';
import SongList from './SongList/SongList';
import SongProvider from './SongProvider/SongProvider';

const SongsPageRouter: FC = () => (
    <Switch>
        <Route exact path={`${ROUTE.SONGS}/:author/:songName`} render={() => <SongProvider />} />
        <Route exact path={ROUTE.SONGS} render={() => <SongList />} />
        <Route path={`${ROUTE.SONGS}/:author`} render={() => <SongList />} />
        <Redirect to={ROUTE.SONGS} />
    </Switch>
);

export default SongsPageRouter;
