import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'


class Inbox extends Component {

	renderButtons() {
		return (
			<div className="d-flex justify-content-end">
				<button type="button" className="btn btn-danger">Compose</button>
			</div>
		);
	}

	renderMessages() {
		return [1, 2, 3].map(message =>
			<Link className="d-flex justify-content-start message-row" to="/messages/read/1">
				<div className="form-check">
					<label className="form-check-label">
						<input className="form-check-input" type="checkbox"/>
					</label>
				</div>
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
					{this.renderMessages()}
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(Inbox);
