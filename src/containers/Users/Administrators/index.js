import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getAdministratorList} from '../../../actions/user-roles/administrator/list';
import UserRow from '../UserRow';


class Administrators extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getAdministratorList());
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
        const {administrators, users} = this.props;
        return Object.values(administrators)
            .map(administrator => users[administrator.user])
            .map(user =>
                <UserRow
                    key={user.id}
                    user={user}
                >
                    <div className="d-flex ml-3">
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
    administrators: state.administrators.data,
    users: state.users.data
}))(Administrators);
