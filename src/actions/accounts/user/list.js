import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized, stringify} from '../../../utils/general';
import {USER} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getUserList = (params = {}) => async dispatch => {
    const MODEL = 'USERS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/users${stringify(params)}`, tokenHeader());
        const {entities} = normalize(response.data, [USER]);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
