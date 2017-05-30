import React from "react";
import {IndexRoute, Route} from "react-router";
import Home from "../containers/Home";
import AuthenticationRoutes from "../containers/Authentication/routes";
import DashboardRoutes from "../containers/Dashboard/routes";


export default (
    <Route path="/">
        <IndexRoute component={Home} />
        {AuthenticationRoutes}
        {DashboardRoutes}
    </Route>
);
