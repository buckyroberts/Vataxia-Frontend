function apiToken() {
    const user = JSON.parse(localStorage.getItem('activeUser')) || {};
    return user.token;
}

export function tokenHeader() {
    let token = apiToken();
    return token
        ? {
            headers: {Authorization: `Token ${token}`}
        }
        : {};
}
