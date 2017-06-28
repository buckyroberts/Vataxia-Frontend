import React from 'react';
import {Route} from 'react-router';
import Authenticate from '../HOC/Authenticate';
import Users from "./";


export default (
    <Route path="/users" component={Authenticate(Users)}/>
);
