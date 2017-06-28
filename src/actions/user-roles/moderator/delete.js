import axios from 'axios';
import {getUser} from '../../../actions/accounts/user/get';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {tokenHeader} from '../../../utils/requestHeaders';


export const deleteModerator = moderator => async dispatch => {
    const MODEL = 'MODERATORS';
    dispatch({type: actionTypes[`UNSET_${MODEL}_PENDING`]});
    try {
        await axios.delete(`${settings.API_ROOT}/moderators/${moderator.id}`, tokenHeader());
        dispatch(getUser(moderator.user));
        dispatch({
            type: actionTypes[`UNSET_${MODEL}_SUCCESS`],
            payload: moderator
        });
    } catch(error) {
        dispatch({
            type: actionTypes[`UNSET_${MODEL}_ERROR`],
            payload: error
        });
    }
};
