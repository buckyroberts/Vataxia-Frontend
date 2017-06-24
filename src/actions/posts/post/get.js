import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {POST} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getPost = id => async dispatch => {
    const MODEL = 'POSTS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/posts/${id}`, tokenHeader());
        const {entities} = normalize(response.data, POST);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
