import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch

} from 'react-router-dom';
import Nav from './components/Nav';
import ExplorePage from './containers/explore/ExplorePage';
import LandingPage from './containers/landing/LandingPage';
import LoginPage from './containers/login/LoginPage';
import RegisterPage from './containers/register/RegisterPage';
import DashboardPage from './containers/dashboard/DashboardPage';
import CollectionsPage from './containers/collections/CollectionsPage';
import NotFoundPage from './containers/not-found/NotFoundPage';


export const renderRoutes = () => (
    <Router> 
        <div>
            <Nav user={null}/>
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
);
