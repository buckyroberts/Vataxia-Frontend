import axios from 'axios';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {tokenHeader} from '../../../utils/requestHeaders';


export const deletePost = post => async dispatch => {
    const MODEL = 'POSTS';
    dispatch({type: actionTypes[`UNSET_${MODEL}_PENDING`]});
    try {
        await axios.delete(`${settings.API_ROOT}/posts/${post.id}`, tokenHeader());
        dispatch({
            type: actionTypes[`UNSET_${MODEL}_SUCCESS`],
            payload: post
        });
    } catch(error) {
        throw error;
    }
};
