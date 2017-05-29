import React from 'react';
import UserDetails from '../containers/user-detail';
import UserList from '../containers/user-list';


const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
