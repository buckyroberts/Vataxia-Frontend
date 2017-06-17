import React from 'react';
import {Route} from 'react-router';
import Messages from "../Messages";
import Compose from "./Compose";
import Inbox from "./Inbox";
import Read from "./Read";
import Sent from "./Sent";
import Trash from "./Trash";


export default (
	<Route path="/messages" component={Messages}>
		<Route path="compose/:userId" component={Compose}/>
		<Route path="inbox" component={Inbox}/>
		<Route path="read/:messageId" component={Read}/>
		<Route path="sent" component={Sent}/>
		<Route path="trash" component={Trash}/>
	</Route>
);
