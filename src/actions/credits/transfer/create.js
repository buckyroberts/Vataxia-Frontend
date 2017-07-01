import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {TRANSFER} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';
import {getWallet} from '../wallet/get';


export const createTransfer = data => async dispatch => {
    const MODEL = 'TRANSFERS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.post(`${settings.API_ROOT}/transfers`, data, tokenHeader());
        dispatch(getWallet(response.data.receiver.id));
        dispatch(getWallet(response.data.sender.id));
        const {entities} = normalize(response.data, TRANSFER);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
