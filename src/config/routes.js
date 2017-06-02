import React from "react";
import {IndexRoute, Route} from "react-router";
import Home from "../containers/Home";
import AccountRoutes from "../containers/Account/routes";
import AuthenticationRoutes from "../containers/Authentication/routes";
import DashboardRoutes from "../containers/Profile/routes";


export default (
    <Route path="/">
        <IndexRoute component={Home} />
        {AccountRoutes}
        {AuthenticationRoutes}
        {DashboardRoutes}
    </Route>
);
