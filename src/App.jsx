import React from 'react';

import {
    BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import PUBLIC_ROUTES, { PRIVATE_ROUTES } from '@/routes';

class App extends React.PureComponent {
    _renderPrivateRoutes() {
        let xhtml = null;
        xhtml = PRIVATE_ROUTES.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
                name={route.name}
            />
        ));
        return xhtml;
    }

    _renderPublicRoutes() {
        let xhtml = null;
        xhtml = PUBLIC_ROUTES.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
                name={route.name}
            />
        ));
        return xhtml;
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {this._renderPrivateRoutes()}
                    {this._renderPublicRoutes()}
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
