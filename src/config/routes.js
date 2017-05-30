import React from "react";
import {Route} from "react-router";
import Authentication from "../containers/Authentication/";
import Login from "../containers/authentication/Login";


export default (
    <Route path="/" component={Authentication}>
        <Route path="login" component={Login} />
    </Route>
);
