import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {MODERATOR} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const createModerator = data => async dispatch => {
    const MODEL = 'MODERATORS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/moderators`, data, tokenHeader());
        const {entities} = normalize(response.data, MODERATOR);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
