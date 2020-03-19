import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container'
import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';

// Change component link to actual home/splash page
const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute exact path="/home" component={HomeContainer} />
        </Switch>
    </div>
);

export default App;