import React from 'react';
import {Route} from 'react-router';
import AuthenticationRequired from '../HOC/AuthenticationRequired';
import Account from "../Account";
import BasicInformation from "./BasicInformation";
import UpdatePassword from "./UpdatePassword";


export default (
    <Route path="/account" component={AuthenticationRequired(Account)}>
        <Route path="basic-information" component={BasicInformation}/>
        <Route path="update-password" component={UpdatePassword}/>
    </Route>
);
