import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {getFullName, getProfileImage} from '../../../utils/user';
import './UserRow.scss';


class UserRow extends Component {

    render() {
        const {children, user, users} = this.props;
        return (
            <div className="UserRow">
                <div className="media">
                    <Link to={`/profile/${user.id}/posts`}>
                        <img className="d-flex align-self-start" src={getProfileImage(user.id, users)}/>
                    </Link>
                    <div className="media-body">
                        <Link className="user-name" to={`/profile/${user.id}/posts`}>
                            {getFullName(user.id, users)}
                        </Link>
                        <div className="details">
                            {user.role}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        );
    }

}

UserRow.propTypes = {
    user: PropTypes.object.isRequired,
};

export default connect(state => ({
    users: state.users.data,
}))(UserRow);
