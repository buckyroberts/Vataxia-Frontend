import axios from 'axios';
import {hashHistory} from 'react-router';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';


export const login = data => async dispatch => {
	dispatch({type: actionTypes[`LOGIN_PENDING`]});
	try {
		const response = await axios.post(`${settings.API_ROOT}/login`, data);
		const user = {
			...JSON.parse(localStorage.getItem('user')),
			...response.data
		};
		localStorage.setItem('user', JSON.stringify(user));
	} catch (error) {
		dispatch({
			type: actionTypes[`LOGIN_ERROR`],
			payload: error
		});
	}
};
