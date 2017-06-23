import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import {getPrivateMessageList} from '../../../actions/private-messages/private-message/list';


class Inbox extends Component {

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
        return [1, 2, 3].map(privateMessage =>
            <Link className="d-flex justify-content-start message-row" to="/messages/read/1">
                <div className="user">Bucky Roberts</div>
                <div className="subject">Subject of the Message</div>
                <div className="date ml-auto">6/17/2017</div>
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
    privateMessages: state.privateMessages.data
}))(Inbox);
