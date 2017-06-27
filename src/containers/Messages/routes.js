import React from 'react';
import {Route} from 'react-router';
import Authenticate from '../HOC/Authenticate';
import Messages from "../Messages";
import Compose from "./Compose";
import Inbox from "./Inbox";
import Read from "./Read";
import Sent from "./Sent";


export default (
    <Route path="/messages" component={Authenticate(Messages)}>
        <Route path="compose/:userId" component={Compose}/>
        <Route path="inbox" component={Inbox}/>
        <Route path="read/:privateMessageId" component={Read}/>
        <Route path="sent" component={Sent}/>
    </Route>
);
