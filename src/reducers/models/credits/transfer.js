import {combineReducers} from 'redux';
import modelReducer from '../../higher-order-reducers/model';


const MODEL = 'TRANSFERS';

export default combineReducers({
    data: modelReducer(MODEL)
});
