import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


const MODEL = 'PRIVATE_MESSAGES';

export default combineReducers({
    data: modelReducer(MODEL)
});
