const MODELS = [

	// Account
	'USERS',

];

const VIEWS = [

	// Authentication
	'LOGIN',
	'LOGOUT',

];

function addStatus(names) {
	return names.reduce((acc, name) => {
		acc[`${name}_PENDING`] = `${name}_PENDING`;
		acc[`${name}_SUCCESS`] = `${name}_SUCCESS`;
		acc[`${name}_ERROR`] = `${name}_ERROR`;
		return acc;
	}, {});
}

function setUnset(models) {
	return models.reduce((acc, model) => {
		acc[`SET_${model}`] = `SET_${model}`;
		acc[`UNSET_${model}`] = `UNSET_${model}`;
		return acc
	}, {});
}

const actionTypes = {
	...addStatus(setUnset(MODELS)),
	...addStatus(VIEWS),
};

export default actionTypes;
