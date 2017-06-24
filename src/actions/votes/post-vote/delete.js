import axios from 'axios';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {tokenHeader} from '../../../utils/requestHeaders';


export const deletePostVote = postVote => async dispatch => {
    const MODEL = 'POST_VOTES';
    dispatch({type: actionTypes[`UNSET_${MODEL}_PENDING`]});
    try {
        await axios.delete(`${settings.API_ROOT}/post_votes/${postVote.id}`, tokenHeader());
        dispatch({
            type: actionTypes[`UNSET_${MODEL}_SUCCESS`],
            payload: postVote
        });
    } catch(error) {
        dispatch({
            type: actionTypes[`UNSET_${MODEL}_ERROR`],
            payload: error
        });
    }
};