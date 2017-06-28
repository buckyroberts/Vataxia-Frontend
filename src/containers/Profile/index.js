import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {Link} from 'react-router';
import {getUser} from '../../actions/accounts/user/get';
import {editProfile} from '../../actions/accounts/profile/edit';
import Navigation from '../../components/Navigation';
import settings from '../../config/settings';
import './Profile.scss';


class Profile extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getUser(userId));
    }

    getProfileImage() {
        const {user: {profile}} = this.props;
        if(profile.image) return `${settings.API_ROOT}${profile.image}`;
        return 'http://i.imgur.com/uuykYlB.png';
    }

    onDrop = files => {
        const {activeUser, dispatch} = this.props;
        dispatch(editProfile({
            ...activeUser.profile,
            image: files[0],
        }))
    };

    renderActionButtons() {
        const {activeUser, user} = this.props;
        if(!activeUser) return null;
        return (
            <div className="action-buttons">
                <Link className="btn btn-success btn-sm" to={`/messages/compose/${user.id}`}>
                    Message
                </Link>
            </div>
        );
    }

    renderEditProfileImage() {
        const {activeUser, user} = this.props;
        if(!activeUser || activeUser.id !== user.id) return null;
        return (
            <Dropzone className="edit-profile-image" onDrop={this.onDrop} multiple={false}>
                Edit profile image
            </Dropzone>
        );
    }

    renderMenu() {
        const {user} = this.props;
        return (
            <div className="list-group">
                {this.renderMenuItem(`/profile/${user.id}/posts`, 'Home')}
                {this.renderMenuItem(`/profile/${user.id}/about`, 'About')}
                {this.renderMenuItem(`/profile/${user.id}/photos`, 'Photos')}
            </div>
        );
    }

    renderMenuItem(url, title) {
        return (
            <Link activeClassName="active" className="list-group-item list-group-item-action" to={url}>
                {title}
            </Link>
        );
    }

    render() {
        const {user} = this.props;
        if(!user) return null;
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    <div className="Profile">
                        <div className="row">
                            <div className="col-2">
                                <img src={this.getProfileImage()} className="img-fluid"/>
                                {this.renderEditProfileImage()}
                                <div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
                                {this.renderActionButtons()}
                                {this.renderMenu()}
                            </div>
                            <div className="col-10">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => ({
    activeUser: state.activeUser,
    user: state.users.data[props.params.userId],
}))(Profile);
