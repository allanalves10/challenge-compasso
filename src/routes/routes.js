import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListUser from '../pages/ListUser';

import Home from './../pages/Home';

function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={ListUser}/>
    </Switch>
    )
}

export default Routes;