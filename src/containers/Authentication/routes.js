import React from 'react';
import {Route} from 'react-router';
import Authentication from "../Authentication";
import Register from "./Register";


export default (
    <Route path="/" component={Authentication}>
        <Route path="register" component={Register} />
    </Route>
);
