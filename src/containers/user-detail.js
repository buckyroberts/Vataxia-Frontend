import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {

    render() {
        const {user} = this.props;
        if (!user) return <div>Select a user...</div>;
        return (
            <div>
                <img src={user.thumbnail} />
                <h2>{user.first} {user.last}</h2>
                <h3>Age: {user.age}</h3>
                <h3>Description: {user.description}</h3>
            </div>
        );
    }

}

export default connect(state => ({
    user: state.activeUser
}))(UserDetail);
