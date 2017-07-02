import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {WALLET} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getWallet = userId => async dispatch => {
    const MODEL = 'WALLETS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/wallets/${userId}`, tokenHeader());
        const {entities} = normalize(response.data, WALLET);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
