import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Read.scss';


class Read extends Component {

	renderButtons() {
		return (
			<div className="d-flex justify-content-end">
				<button type="button" className="btn btn-danger">Delete</button>
			</div>
		);
	}

	renderSender() {
		return (
			<div className="media">
				<a href="#">
					<img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
				</a>
				<div className="media-body">
					<a className="user" href="#">Emily May</a>
					<span className="date"> · 6/17/2017</span>
					<div className="details">
						to <a className="receiver" href="#">Bucky Roberts</a>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="Read">
				<div className="toolbar">
					{this.renderButtons()}
				</div>
				<div className="card message-details">
					<div className="card-block">
						<div className="header">
							{this.renderSender()}
						</div>
						<div className="subject">
							Subject of the Message
						</div>
						<div className="content">
							Bacon ipsum dolor amet ham hock venison shoulder landjaeger turkey. Capicola tongue bacon
							shoulder, cow meatball ham hock brisket frankfurter picanha pancetta.
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(Read);
