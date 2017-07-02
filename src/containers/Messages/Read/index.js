import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getPrivateMessage} from '../../../actions/private-messages/private-message/get';
import {getFullName} from '../../../utils/user';
import './Read.scss';


class Read extends Component {

    componentDidMount() {
        const {dispatch, params: {privateMessageId}} = this.props;
        dispatch(getPrivateMessage(privateMessageId));
    }

    renderButtons() {
        return (
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        );
    }

    renderHeader() {
        const {privateMessage, users} = this.props;
        return (
            <div className="media">
                <Link to={`/profile/${privateMessage.sender}/posts`}>
                    <img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
                </Link>
                <div className="media-body">
                    <Link className="user" to={`/profile/${privateMessage.sender}/posts`}>
                        {getFullName(privateMessage.sender, users)}
                    </Link>
                    <span className="date"> · {privateMessage.created_date}</span>
                    <div className="details">
                        to{' '}
                        <Link className="receiver" to={`/profile/${privateMessage.receiver}/posts`}>
                            {getFullName(privateMessage.receiver, users)}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {privateMessage} = this.props;
        if(!privateMessage) return null;
        return (
            <div className="Read">
                <div className="toolbar">
                    {this.renderButtons()}
                </div>
                <div className="card">
                    <div className="card-block">
                        <div className="header">
                            {this.renderHeader()}
                        </div>
                        <div className="subject">
                            {privateMessage.subject}
                        </div>
                        <div className="content">
                            {privateMessage.body}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => ({
    privateMessage: state.privateMessages.data[props.params.privateMessageId],
    users: state.users.data,
}))(Read);
