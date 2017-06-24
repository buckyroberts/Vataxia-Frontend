import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {POST_REPLY} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const createPostReply = data => async dispatch => {
    const MODEL = 'POST_REPLIES';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/post_replies`, data, tokenHeader());
        const {entities} = normalize(response.data, POST_REPLY);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
