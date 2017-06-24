import omit from 'lodash/omit';


export default function createModelReducer(modelName, INITIAL_STATE = {}) {
    return (state = INITIAL_STATE, action) => {
        switch(action.type) {

            case `SET_${modelName}_SUCCESS`:
                return {
                    ...state,
                    ...action.payload
                };

            case `UNSET_${modelName}_SUCCESS`:
                return omit(
                    state,
                    [action.payload.id]
                );

        }
        return state;
    };
}
