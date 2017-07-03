export const getFullName = (userId, users) => {
    const {first_name, last_name} = users[userId];
    return `${first_name} ${last_name}`;
};

export const getProfileImage = (userId, users) => {
    const image = users[userId].profile.image;
    return image ? image : 'http://i.imgur.com/uuykYlB.png';
};
