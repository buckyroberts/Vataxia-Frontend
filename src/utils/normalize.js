import {schema} from 'normalizr';


export const USER = new schema.Entity('USERS');

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
