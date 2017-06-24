import actionTypes from '../../config/action-types';


export default function(state = null, action) {
    switch(action.type) {

        case actionTypes[`LOGIN_SUCCESS`]:
            return action.payload;

    }
    return state;
}
