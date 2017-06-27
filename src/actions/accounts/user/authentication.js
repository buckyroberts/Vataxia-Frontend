import axios from 'axios';
import {hashHistory} from 'react-router';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {tokenHeader} from '../../../utils/requestHeaders';


export const login = data => async dispatch => {
    dispatch({type: actionTypes[`LOGIN_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/login`, data);
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        dispatch({
            type: actionTypes[`LOGIN_SUCCESS`],
            payload: response.data
        });
        hashHistory.push('/');
    } catch(error) {
        throw error;
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('activeUser');
    dispatch({
        type: actionTypes[`LOGOUT_SUCCESS`]
    });
};

export const updatePassword = data => async() => {
    try {
        const response = await axios.post(`${settings.API_ROOT}/update_password`, data, tokenHeader());
        return response.data;
    } catch(error) {
        throw error;
    }
};
