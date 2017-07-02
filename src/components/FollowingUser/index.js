import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {getFullName, getProfileImage} from '../../utils/user';
import './FollowingUser.scss';


class FollowingUser extends Component {

    render() {
        const {children, user, users} = this.props;
        return (
            <div className="FollowingUser" key={this.props.id}>
                <div className="d-flex justify-content-start">
                    <div className="media">
                        <Link to={`/profile/${user.id}/posts`}>
                            <img className="d-flex mr-3" src={getProfileImage(user.id, users)}/>
                        </Link>
                        <div className="media-body">
                            <Link className="name" to={`/profile/${user.id}/posts`}>
                                {getFullName(user.id, users)}
                            </Link>
                            <div className="details">{user.role}</div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        );
    }

}

FollowingUser.propTypes = {
    user: PropTypes.object.isRequired,
};

export default connect(state => ({
    users: state.users.data
}))(FollowingUser);
