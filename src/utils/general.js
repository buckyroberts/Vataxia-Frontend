export function updateWithNormalized(data, dispatch) {
	Object.keys(data).forEach(key => {
		dispatch({
			type: `SET_${key}_SUCCESS`,
			payload: data[key]
		});
	});
}
