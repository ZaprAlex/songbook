import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE } from '../../constants/route';
import ChordList from './ChordList/ChordList';
import ChordProvider from './ChordProvider';

const ChordsPageRouter: FC = () => (
    <Switch>
        <Route exact path={`${ROUTE.CHORDS}/:chordName`} render={() => <ChordProvider />} />
        <Route exact path={ROUTE.CHORDS} render={() => <ChordList />} />
        <Redirect to={ROUTE.CHORDS} />
    </Switch>
);

export default ChordsPageRouter;
