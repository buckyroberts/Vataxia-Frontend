import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


const MODEL = 'USERS';

export default combineReducers({
    data: modelReducer(MODEL)
});
