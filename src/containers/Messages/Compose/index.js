import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getUser} from '../../../actions/accounts/user/get';
import PrivateMessageForm from '../../../forms/PrivateMessageForm';
import {getFullName, getProfileImage} from '../../../utils/user';
import './Compose.scss';


class Compose extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getUser(userId));
    }

    renderHeader() {
        const {activeUser, receiver, users} = this.props;
        return (
            <div className="media">
                <Link to={`/profile/${activeUser.id}/posts`}>
                    <img className="d-flex" src={getProfileImage(activeUser.id, users)}/>
                </Link>
                <div className="media-body">
                    <Link className="user" to={`/profile/${activeUser.id}/posts`}>
                        {getFullName(activeUser.id, users)}
                    </Link>
                    <div className="details">
                        to{' '}
                        <Link className="receiver" to={`/profile/${receiver.id}/posts`}>
                            {getFullName(receiver.id, users)}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {receiver} = this.props;
        if(!receiver) return null;
        return (
            <div className="Compose">
                <div className="card">
                    <div className="card-block">
                        <div className="header">
                            {this.renderHeader()}
                        </div>
                        <PrivateMessageForm receiver={receiver}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => ({
    activeUser: state.activeUser,
    receiver: state.users.data[props.params.userId],
    users: state.users.data,
}))(Compose);
