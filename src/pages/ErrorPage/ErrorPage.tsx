import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ERROR_ROUTE, ROUTE } from '../../constants/route';
import Page404 from '../../containers/Errors/Page404';
import CommonError from '../../containers/Errors/CommonError/CommonError';

const ErrorPage: FC = () => (
    <Switch>
        <Route path={ERROR_ROUTE._404} component={Page404} />
        <Route path={ERROR_ROUTE.COMMON} component={CommonError} />
        <Route path={ROUTE.ERROR} render={() => <Redirect to={ERROR_ROUTE._404} />} />
    </Switch>
);

export default ErrorPage;
