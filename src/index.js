import 'babel-polyfill';
import './assets/scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router} from "react-router";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import routes from "./config/routes";
import rootReducer from './reducers/index';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
