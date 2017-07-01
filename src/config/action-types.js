const MODELS = [

    // Accounts
    'USERS',

    // Credits
    'INVITATIONS',
    'TRANSFERS',
    'WALLETS',

    // Posts
    'POSTS',

    // Private messages
    'PRIVATE_MESSAGES',

    // Replies
    'POST_REPLIES',

    // User roles
    'ADMINISTRATORS',
    'MODERATORS',

    // Votes
    'POST_VOTES',

];

const VIEWS = [

    // Authentication
    'LOGIN',
    'LOGOUT',

];

const addStatus = names => {
    return names.reduce((acc, name) => {
        acc[`${name}_PENDING`] = `${name}_PENDING`;
        acc[`${name}_SUCCESS`] = `${name}_SUCCESS`;
        acc[`${name}_ERROR`] = `${name}_ERROR`;
        return acc;
    }, {});
};

const setUnset = models => {
    let results = [];
    models.forEach(model => {
        results.push(`SET_${model}`);
        results.push(`UNSET_${model}`);
    });
    return results;
};

const actionTypes = {
    ...addStatus(setUnset(MODELS)),
    ...addStatus(VIEWS),
};

export default actionTypes;
