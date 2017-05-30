export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
