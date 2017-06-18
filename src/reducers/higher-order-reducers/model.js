import omit from 'lodash/omit';


const createModelState = () => ({});

export default function createModelReducer(modelName, INITIAL_STATE = createModelState()) {
	return (state = INITIAL_STATE, action) => {
		switch (action.type) {

			case `SET_${modelName}_SUCCESS`:
				return {
					...state,
					...action.payload
				};

			case `UNSET_${modelName}_SUCCESS`:
				return omit(state, [action.payload.id]);

		}
		return state;
	};
}
