import React from 'react';
import {Route} from 'react-router';
import Authentication from "../Authentication";
import Unauthenticated from '../../containers/HOC/Unauthenticated';
import Login from "./Login";
import AcceptInvitation from "./AcceptInvitation";


export default (
    <Route path="/" component={Unauthenticated(Authentication)}>
        <Route path="login" component={Login}/>
        <Route path="accept-invitation" component={AcceptInvitation}/>
        <Route path="accept-invitation/:code" component={AcceptInvitation}/>
    </Route>
);
