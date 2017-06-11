import React from 'react';
import {Route} from 'react-router';
import Profile from "./";
import About from "./About";
import Followers from "./Followers";
import Following from "./Following";
import Photos from "./Photos";
import Posts from "./Posts";


export default (
    <Route path="/profile" component={Profile}>
        <Route path="about" component={About}/>
        <Route path="followers" component={Followers}/>
        <Route path="following" component={Following}/>
        <Route path="photos" component={Photos}/>
        <Route path="posts" component={Posts}/>
    </Route>
);
