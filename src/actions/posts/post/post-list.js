import axios from 'axios';
import {hashHistory} from 'react-router';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';


export const getOrderList = (params = {}) => async dispatch => {
	const MODEL = 'POSTS';
	dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
	try {
		// const response = await axios.get(`${settings.API_ROOT}/posts}`, getTokenHeader());
	}
};
