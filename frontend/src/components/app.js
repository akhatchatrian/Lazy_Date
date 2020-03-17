import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container'
import NavbarContainer from './navbar/navbar_container';

// Change component link to actual home/splash page
const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;