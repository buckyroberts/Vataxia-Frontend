import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {getPrivateMessageList} from '../../../actions/private-messages/private-message/list';
import {getFullName} from '../../../utils/user';


class Inbox extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPrivateMessageList());
    }

    renderPrivateMessages() {
        const {activeUser, privateMessages, users} = this.props;
        return Object.values(privateMessages)
            .filter(privateMessage => privateMessage.receiver === activeUser.id)
            .map(privateMessage =>
                <Link className="d-flex justify-content-start message-row" key={privateMessage.id}
                      to={`/messages/read/${privateMessage.id}`}>
                    <div className="user">{getFullName(privateMessage.sender, users)}</div>
                    <div className="subject">{privateMessage.subject}</div>
                    <div className="date ml-auto">{privateMessage.created_date}</div>
                </Link>
            )
    }

    render() {
        return (
            <div className="message-rows">
                {this.renderPrivateMessages()}
            </div>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
    privateMessages: state.privateMessages.data,
    users: state.users.data
}))(Inbox);
