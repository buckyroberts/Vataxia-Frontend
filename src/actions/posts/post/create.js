import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {POST} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const createPost = data => async dispatch => {
	const MODEL = 'POSTS';
	dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
	try {
		const response = await axios.post(`${settings.API_ROOT}/posts`, data, tokenHeader());
		const {entities} = normalize(response.data, POST);
		setNormalized(dispatch, entities);
		return entities;
	} catch (error) {
		dispatch({
			type: actionTypes[`SET_${MODEL}_ERROR`],
			payload: error
		});
		throw error;
	}
};
