import React from "react";
import {IndexRoute, Route} from "react-router";
import Authenticated from '../containers/HOC/Authenticated';
import Home from "../containers/Home";
import AccountRoutes from "../containers/Account/routes";
import AuthenticationRoutes from "../containers/Authentication/routes";
import MessagesRoutes from "../containers/Messages/routes";
import ProfileRoutes from "../containers/Profile/routes";


export default (
    <Route path="/">
        <IndexRoute component={Authenticated(Home)}/>
        {AccountRoutes}
        {AuthenticationRoutes}
        {MessagesRoutes}
        {ProfileRoutes}
    </Route>
);
