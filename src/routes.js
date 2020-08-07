import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Product from './components/product/Product';
import Form from './components/form/Form';




export default (
    <Switch>
        <Route exact path = '/' component = {Dashboard}/>
        <Route path = '/product' component = {Product}/>
        <Route path = '/Form' component = {Form}/>
    </Switch>
)