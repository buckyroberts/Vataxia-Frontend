import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';


const rootReducer = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default rootReducer
