import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getUserList} from '../../../actions/accounts/user/list';
import {createModerator} from '../../../actions/user-roles/moderator/create';
import settings from '../../../config/settings';
import UserRow from '../UserRow';


class RegularUsers extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getUserList());
    }

    handleAddModerator = user => e => {
        const {dispatch} = this.props;
        dispatch(createModerator({
            user: user.id
        }));
    };

    renderAddModeratorButton(user) {
        const {activeUser} = this.props;
        if(!activeUser || activeUser.role !== settings.ADMINISTRATOR) return null;
        return (
            <button className="btn btn-primary btn-sm" onClick={this.handleAddModerator(user)}>
                Add Moderator
            </button>
        );
    }

    renderMessageButton(user) {
        const {activeUser} = this.props;
        if(!activeUser) return null;
        return (
            <Link className="btn btn-success btn-sm" to={`/messages/compose/${user.id}`}>
                Message
            </Link>
        );
    }

    renderUserList() {
        const {users} = this.props;
        return Object.values(users)
            .filter(user => user.role === null)
            .map(user =>
                <UserRow
                    key={user.id}
                    user={user}
                >
                    <div className="d-flex ml-3">
                        {this.renderAddModeratorButton(user)}
                        {this.renderMessageButton(user)}
                    </div>
                </UserRow>
            );
    }

    render() {
        return (
            <div>
                {this.renderUserList()}
            </div>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
    users: state.users.data
}))(RegularUsers);
