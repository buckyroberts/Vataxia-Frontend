import 'babel-polyfill';
import './assets/scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './components/app';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
