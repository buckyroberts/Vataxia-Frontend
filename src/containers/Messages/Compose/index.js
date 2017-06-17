import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Compose.scss';


class Compose extends Component {

	renderSender() {
		return (
			<div className="media">
				<a href="#">
					<img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
				</a>
				<div className="media-body">
					<a className="user" href="#">Bucky Roberts</a>
					<span className="date"> · 6/17/2017</span>
					<div className="details">
						to <a className="receiver" href="#">Kelsey Anderson</a>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="Compose">
				<div className="card">
					<div className="card-block">
						<div className="header">
							{this.renderSender()}
						</div>
						<form>
							<div className="form-group">
								<input type="subject" className="form-control" id="subject" placeholder="Subject"/>
							</div>
							<div className="form-group">
								<textarea className="form-control" id="exampleTextarea" rows="3"/>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(Compose);
