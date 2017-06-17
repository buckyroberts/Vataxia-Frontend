import React, {Component} from 'react';
import {connect} from 'react-redux';
import './FollowingUser.scss';


class FollowingUser extends Component {

	render() {
		const {children} = this.props;
		return (
			<div className="card FollowingUser" key={this.props.id}>
				<div className="card-block d-flex justify-content-start">
					<div className="media">
						<img className="d-flex mr-3" src="http://i.imgur.com/uuykYlB.png"/>
						<div className="media-body">
							<a className="name">Sidney Crosby</a>
							<div className="details">Pittsburgh, PA</div>
						</div>
					</div>
					{children}
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(FollowingUser);
