import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE } from '../../constants/route';
import Song from '../../containers/Song';

const SongsPageRouter: FC = () => (
    <Switch>
        <Route exact path={ROUTE.SONGS} render={() => <Song />} />
        <Route path={`${ROUTE.SONGS}/:songId`} render={() => <Song />} />
        <Redirect to={ROUTE.SONGS} />
    </Switch>
);

export default SongsPageRouter;
