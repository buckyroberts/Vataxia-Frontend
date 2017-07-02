import axios from 'axios';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';


export const acceptInvitation = data => async dispatch => {
    dispatch({type: actionTypes[`LOGIN_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/accept_invitation`, data);
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        dispatch({
            type: actionTypes[`LOGIN_SUCCESS`],
            payload: response.data
        });
    } catch(error) {
        throw error;
    }
};
