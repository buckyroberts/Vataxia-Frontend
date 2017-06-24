import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {USER} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const editUser = data => async dispatch => {
    const MODEL = 'USERS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.patch(`${settings.API_ROOT}/users/${data.id}`, data, tokenHeader());
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        dispatch({
            type: actionTypes[`LOGIN_SUCCESS`],
            payload: response.data
        });
        const {entities} = normalize(response.data, USER);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
