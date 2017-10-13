import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch

} from 'react-router-dom';

import ExplorePage from './explore/ExplorePage';
import LandingPage from './landing/LandingPage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import DashboardPage from './dashboard/DashboardPage';
import CollectionsPage from './collections/CollectionsPage';
import NotFoundPage from './not-found/NotFoundPage';

const AppContainer = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>

            <hr/>
            <Switch>
            <Route exact path="/" render={(props) => <LandingPage {...props} />}/>
            <Route path="/explore" component={ExplorePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/dashboard" component={DashboardPage}/>
            <Route path="/collections" component={CollectionsPage}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppContainer;