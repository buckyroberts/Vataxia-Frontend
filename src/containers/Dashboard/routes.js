import React from 'react';
import {Route} from 'react-router';
import Dashboard from "../Dashboard";
import Profile from "./Profile";


export default (
    <Route path="/" component={Dashboard}>
        <Route path="profile" component={Profile} />
    </Route>
);
