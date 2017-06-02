import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Profile from "./";
import Home from "./Home";


export default (
	<Route path="/profile" component={Profile}>
		<IndexRoute component={Home}/>
	</Route>
);
