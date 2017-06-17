import React, {Component} from 'react';
import {connect} from 'react-redux';


class Inbox extends Component {

    renderMessages() {
        return [1, 2, 3].map(message =>
            <div className="d-flex justify-content-start">
                <div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" />
                        </label>
                    </div>
                </div>
                <div>Bucky Roberts</div>
                <div>Subject of the Message</div>
                <div className="ml-auto">6/17/2017</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderMessages()}
            </div>
        );
    }

}

export default connect(state => ({}))(Inbox);
