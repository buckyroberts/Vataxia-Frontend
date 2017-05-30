import React from 'react';
import {Route} from 'react-router';
import Authentication from "../Authentication";
import Login from "./Login";


export default (
    <Route path="/" component={Authentication}>
        <Route path="login" component={Login} />
    </Route>
);
