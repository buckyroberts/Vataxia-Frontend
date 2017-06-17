import React from 'react';
import {Route} from 'react-router';
import Messages from "../Messages";
import Inbox from "./Inbox";
import Sent from "./Sent";
import Trash from "./Trash";


export default (
	<Route path="/messages" component={Messages}>
		<Route path="inbox" component={Inbox}/>
		<Route path="sent" component={Sent}/>
		<Route path="trash" component={Trash}/>
	</Route>
);
