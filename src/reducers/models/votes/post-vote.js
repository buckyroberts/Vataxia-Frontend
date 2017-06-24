import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


const MODEL = 'POST_VOTES';

export default combineReducers({
    data: modelReducer(MODEL)
});
