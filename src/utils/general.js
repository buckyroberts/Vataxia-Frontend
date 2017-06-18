export function setNormalized(data, dispatch) {
	Object.keys(data).forEach(key => {
		dispatch({
			type: `SET_${key}_SUCCESS`,
			payload: data[key]
		});
	});
}
