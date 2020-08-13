import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardNew from './components/dashboardNew/dashboardNew';
import FormNew from './components/formNew/formNew';




export default (
    <Switch>
        <Route exact path = '/' component = {DashboardNew}/>
        <Route exact path = '/Form' component = {FormNew}/>
        <Route path = '/Form/:id' component = {FormNew}/>
    </Switch>
)