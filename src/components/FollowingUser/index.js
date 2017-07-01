import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import settings from '../../config/settings';
import {getUsersFullName} from '../../utils/user';
import './FollowingUser.scss';


class FollowingUser extends Component {

    getProfileImage() {
        const {user: {profile}} = this.props;
        if(profile.image) return `${settings.API_ROOT}${profile.image}`;
        return 'http://i.imgur.com/uuykYlB.png';
    }

    render() {
        const {children, user, users} = this.props;
        return (
            <div className="FollowingUser" key={this.props.id}>
                <div className="d-flex justify-content-start">
                    <div className="media">
                        <img className="d-flex mr-3" src={this.getProfileImage()}/>
                        <div className="media-body">
                            <a className="name">{getUsersFullName(users, user.id)}</a>
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
