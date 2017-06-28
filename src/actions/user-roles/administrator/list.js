import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized, stringify} from '../../../utils/general';
import {ADMINISTRATOR} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const getAdministratorList = (params = {}) => async dispatch => {
    const MODEL = 'ADMINISTRATORS';
    dispatch({type: actionTypes[`SET_${MODEL}_PENDING`]});
    try {
        const response = await axios.get(`${settings.API_ROOT}/administrators${stringify(params)}`, tokenHeader());
        const {entities} = normalize(response.data, [ADMINISTRATOR]);
        setNormalized(dispatch, entities);
    } catch(error) {
        throw error;
    }
};
