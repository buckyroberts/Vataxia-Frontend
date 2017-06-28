import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized, stringify} from '../../../utils/general';
import {MODERATOR} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getModeratorList = (params = {}) => async dispatch => {
    const MODEL = 'MODERATORS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/moderators${stringify(params)}`, tokenHeader());
        const {entities} = normalize(response.data, [MODERATOR]);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
