import React from 'react';
import {Route} from 'react-router';
import Authentication from "../Authentication";
import Login from "./Login";
import Register from "./Register";


export default (
	<Route path="/" component={Authentication}>
		<Route path="login" component={Login}/>
		<Route path="register" component={Register}/>
	</Route>
);
