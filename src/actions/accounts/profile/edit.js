import axios from 'axios';
import {normalize} from 'normalizr';
import actionTypes from '../../../config/action-types';
import settings from '../../../config/settings';
import {setNormalized} from '../../../utils/general';
import {USER} from '../../../utils/normalize';
import {tokenHeader} from '../../../utils/requestHeaders';


export const editProfile = data => async dispatch => {
    let formData = new FormData();
    if(data.image) formData.append('image', data.image);
    try {
        const response = await axios.patch(`${settings.API_ROOT}/profiles/${data.id}`, formData, tokenHeader());
        localStorage.setItem('activeUser', JSON.stringify(response.data));
        dispatch({
            type: actionTypes[`LOGIN_SUCCESS`],
            payload: response.data
        });
        const {entities} = normalize(response.data, USER);
        setNormalized(dispatch, entities);
        return entities;
    } catch(error) {
        throw error;
    }
};
