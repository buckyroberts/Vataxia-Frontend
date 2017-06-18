export function setNormalized(dispatch, data) {
	Object.keys(data).forEach(key => {
		dispatch({
			type: `SET_${key}_SUCCESS`,
			payload: data[key]
		});
	});
}
