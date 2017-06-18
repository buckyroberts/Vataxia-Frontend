import {schema} from 'normalizr';


export const USER = new schema.Entity('USERS');
export const POST_REPLY = new schema.Entity('POST_REPLIES', {
	user: USER,
});
export const POST_VOTES = new schema.Entity('POST_VOTES');
export const POST = new schema.Entity('POSTS', {
	user: USER,
	post_replies: [POST_REPLY],
	post_votes: [POST_VOTES],
});
