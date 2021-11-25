import React from 'react';
import { BrowserRouter as Redirect, Router, Route } from 'react-router-dom';
import Switch from 'react-switch';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';


const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/trending" exact component={Trending} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;
