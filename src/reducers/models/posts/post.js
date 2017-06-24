import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


const MODEL = 'POSTS';

export default combineReducers({
    data: modelReducer(MODEL)
});
