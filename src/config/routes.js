import React from "react";
import {IndexRoute, Route} from "react-router";
import Authenticate from '../containers/HOC/Authenticate';
import Home from "../containers/Home";
import AccountRoutes from "../containers/Account/routes";
import AuthenticationRoutes from "../containers/Authentication/routes";
import MessagesRoutes from "../containers/Messages/routes";
import ProfileRoutes from "../containers/Profile/routes";
import UsersRoutes from "../containers/Users/routes";


export default (
    <Route path="/">
        <IndexRoute component={Authenticate(Home)}/>
        {AccountRoutes}
        {AuthenticationRoutes}
        {MessagesRoutes}
        {ProfileRoutes}
        {UsersRoutes}
    </Route>
);
