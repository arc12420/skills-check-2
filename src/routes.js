import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardNew from './components/dashboardNew/dashboardNew';
// import Form from './components/form/Form';




export default (
    <Switch>
        <Route exact path = '/' component = {DashboardNew}/>
        {/* <Route path = '/product' component = {Product}/> */}
        {/* <Route path = '/Form' component = {Form}/> */}
    </Switch>
)