import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container'

// Change component link to actual home/splash page
const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
    </Switch>
);

export default App;