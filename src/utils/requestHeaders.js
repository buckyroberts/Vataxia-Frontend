function apiToken() {
    const user = JSON.parse(localStorage.getItem('activeUser'));
    return user ? user.token : null;
}

export function tokenHeader() {
    let token = apiToken();
    return token
        ? {
            headers: {Authorization: `Token ${token}`}
        }
        : {};
}
