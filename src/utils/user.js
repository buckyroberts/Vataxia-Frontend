export const getUsersFullName = (users, userId) => {
    const {first_name, last_name} = users[userId];
    return `${first_name} ${last_name}`;
};
