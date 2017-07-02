import {schema} from 'normalizr';


export const USER = new schema.Entity('USERS');

export const INVITATION = new schema.Entity('INVITATIONS', {
    receiver: USER,
    sender: USER,
});

export const TRANSFER = new schema.Entity('TRANSFERS', {
    receiver: USER,
    sender: USER,
});

export const WALLET = new schema.Entity('WALLETS', {
    user: USER,
});

export const ADMINISTRATOR = new schema.Entity('ADMINISTRATORS', {
    user: USER,
});

export const MODERATOR = new schema.Entity('MODERATORS', {
    sponsor: USER,
    user: USER,
});

export const POST_REPLY = new schema.Entity('POST_REPLIES', {
    user: USER,
});

export const POST_VOTE = new schema.Entity('POST_VOTES');

export const POST = new schema.Entity('POSTS', {
    user: USER,
    post_replies: [POST_REPLY],
    post_votes: [POST_VOTE],
});

export const PRIVATE_MESSAGE = new schema.Entity('PRIVATE_MESSAGES', {
    receiver: USER,
    sender: USER,
});
