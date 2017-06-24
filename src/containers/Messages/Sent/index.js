import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {getPrivateMessageList} from '../../../actions/private-messages/private-message/list';
import {getUsersFullName} from '../../../utils/user';


class Sent extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPrivateMessageList());
    }

    renderButtons() {
        return (
            <div className="d-flex justify-content-end">
                <Link className="btn btn-danger" to="/messages/compose/1">Compose</Link>
            </div>
        );
    }

    renderPrivateMessages() {
        const {activeUser, privateMessages, users} = this.props;
        return Object.values(privateMessages)
            .filter(privateMessage => privateMessage.sender === activeUser.id)
            .map(privateMessage =>
                <Link className="d-flex justify-content-start message-row" key={privateMessage.id}
                      to={`/messages/read/${privateMessage.id}`}>
                    <div className="user">{getUsersFullName(users, privateMessage.receiver)}</div>
                    <div className="subject">{privateMessage.subject}</div>
                    <div className="date ml-auto">{privateMessage.created_date}</div>
                </Link>
            )
    }

    render() {
        return (
            <div>
                <div className="toolbar">
                    {this.renderButtons()}
                </div>
                <div className="message-rows">
                    {this.renderPrivateMessages()}
                </div>
            </div>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
    privateMessages: state.privateMessages.data,
    users: state.users.data
}))(Sent);
