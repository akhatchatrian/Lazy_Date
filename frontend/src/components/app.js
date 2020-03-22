import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container'
import NavbarContainer from './navbar/navbar_container';
import DateSearchFormContainer from "./date_search_form/date_search_form_container";
import HomeContainer from './home/home_container';
import DateShowContainer from './home/date_show_container'
import Footer from "./footer";

// Change component link to actual home/splash page
const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
            <ProtectedRoute exact path="/date" component={DateSearchFormContainer} />
            <ProtectedRoute exact path="/date/browse" component={DateShowContainer} />
            {/* <AuthRoute exact path="/home" component={HomeContainer} /> */}
        </Switch>
        <Footer />
    </div>
);

export default App;