import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/useAuthentication';

import ListUser from '../pages/ListUser';

import Home from './../pages/Home';

function Routes() {
    return (
    <Switch>
        <AuthProvider>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={ListUser}/>
        </AuthProvider>
    </Switch>
    )
}

export default Routes;