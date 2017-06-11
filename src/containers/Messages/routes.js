import React from 'react';
import {Route} from 'react-router';
import Messages from "../Messages";
import Inbox from "./Inbox";


export default (
    <Route path="/messages" component={Messages}>
        <Route path="inbox" component={Inbox} />
    </Route>
);
