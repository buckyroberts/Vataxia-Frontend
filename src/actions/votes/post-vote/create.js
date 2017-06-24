import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {POST_VOTE} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const createPostVote = data => async dispatch => {
    const MODEL = 'POST_VOTES';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/post_votes`, data, tokenHeader());
        const {entities} = normalize(response.data, POST_VOTE);
        setNormalized(dispatch, entities);
    } catch(error) {
        dispatch({
            type: actionTypes[`SET_${MODEL}_ERROR`],
            payload: error
        });
    }
};
