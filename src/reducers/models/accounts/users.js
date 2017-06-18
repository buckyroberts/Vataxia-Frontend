import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


export default combineReducers({
	data: modelReducer('USERS')
});
