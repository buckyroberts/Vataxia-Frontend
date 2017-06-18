import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import actionTypes from '../config/action-types';

// Application
import activeUser from './application/active-user';

// Models
import posts from './models/posts/post';
import users from './models/accounts/users';


const appReducer = combineReducers({
	form: formReducer,

	// Application
	activeUser,

	// Models
	posts,
	users,

});

const rootReducer = (state, action) => {
	if (action.type === actionTypes[`LOGOUT_SUCCESS`]) state = undefined;
	return appReducer(state, action);
};

export default rootReducer
