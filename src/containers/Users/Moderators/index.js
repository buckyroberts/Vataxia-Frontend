import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {deleteModerator} from '../../../actions/user-roles/moderator/delete';
import {getModeratorList} from '../../../actions/user-roles/moderator/list';
import settings from '../../../config/settings';
import UserRow from '../UserRow';


class Moderators extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getModeratorList());
    }

    handleDeleteModerator = moderator => e => {
        const {dispatch} = this.props;
        dispatch(deleteModerator(moderator));
    };

    renderDeleteModeratorButton(moderator) {
        const {activeUser} = this.props;
        if(!activeUser || activeUser.role !== settings.ADMINISTRATOR) return null;
        return (
            <button className="btn btn-danger btn-sm" onClick={this.handleDeleteModerator(moderator)}>
                Delete Moderator
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
        const {moderators, users} = this.props;
        return Object.values(moderators)
            .map(moderator => {
                const user = users[moderator.user];
                return (
                    <UserRow
                        key={user.id}
                        user={user}
                    >
                        <div className="d-flex ml-3">
                            {this.renderDeleteModeratorButton(moderator)}
                            {this.renderMessageButton(user)}
                        </div>
                    </UserRow>
                );
            });
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
    moderators: state.moderators.data,
    users: state.users.data
}))(Moderators);
