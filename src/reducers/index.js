import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import actionTypes from '../config/action-types';

// Application
import activeUser from './application/active-user';

// Models
import postReplies from './models/replies/post-reply';
import postVotes from './models/votes/post-vote';
import posts from './models/posts/post';
import privateMessages from './models/private-messages/private-message';
import users from './models/accounts/users';


const appReducer = combineReducers({
    form: formReducer,

    // Application
    activeUser,

    // Models
    postReplies,
    postVotes,
    posts,
    privateMessages,
    users,

});

const rootReducer = (state, action) => {
    if(action.type === actionTypes[`LOGOUT_SUCCESS`]) state = undefined;
    return appReducer(state, action);
};

export default rootReducer
