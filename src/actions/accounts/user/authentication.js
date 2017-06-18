import axios from 'axios';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';


export const login = data => async dispatch => {
	dispatch({type: actionTypes[`LOGIN_PENDING`]});
	try {
		const response = await axios.post(`${settings.API_ROOT}/login`, data);
		localStorage.setItem('user', JSON.stringify(response.data));
		dispatch({
			type: actionTypes[`LOGIN_SUCCESS`],
			payload: response.data
		});
	} catch (error) {
		dispatch({
			type: actionTypes[`LOGIN_ERROR`],
			payload: error
		});
	}
};
