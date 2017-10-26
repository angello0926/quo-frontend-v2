import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch

} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import ExplorePage from './containers/explore/ExplorePage.jsx';
import LandingPage from './containers/landing/LandingPage.jsx';
import LoginPage from './containers/login/LoginPage.jsx';
import RegisterPage from './containers/register/RegisterPage.jsx';
import DashboardPage from './containers/dashboard/DashboardPage.jsx';
import CollectionsPage from './containers/collections/CollectionsPage.jsx';
import NotFoundPage from './containers/not-found/NotFoundPage.jsx';


export const renderRoutes = () => (
    <Router> 
        <div>
            <Nav user={null}/>
            <div className="container">
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
        </div>
    </Router>
);
