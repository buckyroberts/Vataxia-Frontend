import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Application
import activeUser from './application/active-user';

// Models
import users from './models/accounts/users';


const appReducer = combineReducers({
	form: formReducer,
});

const rootReducer = combineReducers({
	activeUser,
	users,
});

export default rootReducer
