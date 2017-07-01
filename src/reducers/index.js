import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import actionTypes from '../config/action-types';

// Application
import activeUser from './application/active-user';

// Models
import administrators from './models/user-roles/administrator';
import invitations from './models/credits/invitation';
import moderators from './models/user-roles/moderator';
import postReplies from './models/replies/post-reply';
import postVotes from './models/votes/post-vote';
import posts from './models/posts/post';
import privateMessages from './models/private-messages/private-message';
import transfers from './models/credits/transfer';
import users from './models/accounts/users';
import wallets from './models/credits/wallet';


const appReducer = combineReducers({
    form: formReducer,

    // Application
    activeUser,

    // Models
    administrators,
    invitations,
    moderators,
    postReplies,
    postVotes,
    posts,
    privateMessages,
    transfers,
    users,
    wallets,

});

const rootReducer = (state, action) => {
    if(action.type === actionTypes[`LOGOUT_SUCCESS`]) state = undefined;
    return appReducer(state, action);
};

export default rootReducer
