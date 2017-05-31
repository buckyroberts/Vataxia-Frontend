import React from 'react';
import {Route} from 'react-router';
import Account from "../Account";
import UpdatePassword from "./UpdatePassword";


export default (
    <Route path="/" component={Account}>
        <Route path="update-password" component={UpdatePassword} />
    </Route>
);
