import React from 'react';
import {Route} from 'react-router';
import Authenticated from '../../containers/HOC/Authenticated';
import Profile from "./";
import About from "./About";
import Followers from "./Followers";
import Following from "./Following";
import Photos from "./Photos";
import PostDetail from "./PostDetail";
import PostList from "./PostList";


export default (
	<Route path="/profile/:userId" component={Authenticated(Profile)}>
		<Route path="about" component={About}/>
		<Route path="followers" component={Followers}/>
		<Route path="following" component={Following}/>
		<Route path="photos" component={Photos}/>
		<Route path="posts/:postId" component={PostDetail}/>
		<Route path="posts" component={PostList}/>
	</Route>
);
