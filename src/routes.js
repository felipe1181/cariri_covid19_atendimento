import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from './pages/login/index';
import Dashboard from './pages/dashboard/index';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/inicio" component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    );
}
