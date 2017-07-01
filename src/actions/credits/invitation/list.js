import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized, stringify} from '../../../utils/general';
import {INVITATION} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getInvitationList = (params = {}) => async dispatch => {
    const MODEL = 'INVITATIONS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/invitations${stringify(params)}`, tokenHeader());
        const {entities} = normalize(response.data, [INVITATION]);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
