import React, {Component} from 'react';
import {connect} from 'react-redux';


class Inbox extends Component {

    renderMessages() {
        return [1, 2, 3].map(message =>
            <div className="d-flex justify-content-start message-row">
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                    </label>
                </div>
                <div className="user">Bucky Roberts</div>
                <div className="subject">Subject of the Message</div>
                <div className="date ml-auto">6/17/2017</div>
            </div>
        )
    }

    render() {
        return (
            <div className="message-rows">
                {this.renderMessages()}
            </div>
        );
    }

}

export default connect(state => ({}))(Inbox);
