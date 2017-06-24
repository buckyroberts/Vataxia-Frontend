import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {PRIVATE_MESSAGE} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getPrivateMessage = id => async dispatch => {
    const MODEL = 'PRIVATE_MESSAGES';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/private_messages/${id}`, tokenHeader());
        const {entities} = normalize(response.data, PRIVATE_MESSAGE);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
