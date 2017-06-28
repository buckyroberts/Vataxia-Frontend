import pickBy from 'lodash/pickBy';
import qs from 'querystring';


export function setNormalized(dispatch, data) {
    Object.keys(data).forEach(key => {
        dispatch({
            type: `SET_${key}_SUCCESS`,
            payload: data[key]
        });
    });
}

export function stringify(params = {}) {
    const results = qs.stringify(pickBy(params));
    if (!Object.values(results).length) return '';
    return '?' + results;
}
