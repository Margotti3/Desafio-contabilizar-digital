import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import CreateClient from './pages/createClient';
import Client from './pages/client';
import CreateRelated from './pages/createRelated';
import EditClient from './pages/editClient';
import EditRelated from './pages/editRelated';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Home} path="/home" />
            <Route component={CreateClient} path="/create-client" />
            <Route component={Client} path="/client/:id" />
            <Route component={EditClient} path="/edit-client/:id" />
            <Route component={CreateRelated} path="/create-related/:id" />
            <Route component={EditRelated} path="/edit-related/:id" />

        </BrowserRouter>
    );
}

export default Routes;