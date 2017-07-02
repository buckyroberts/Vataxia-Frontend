import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {INVITATION} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';
import {getWallet} from '../wallet/get';


export const createInvitation = data => async dispatch => {
    const MODEL = 'INVITATIONS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/invitations`, data, tokenHeader());
        dispatch(getWallet(response.data.sender.id));
        const {entities} = normalize(response.data, INVITATION);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
