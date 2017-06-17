import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from '../../../components/PostListItem';
import './PostDetail.scss'


class PostDetail extends Component {

	render() {
		return (
			<div className="PostDetail">
				<div className="card">
					<div className="card-block p-0">
						<PostListItem/>
					</div>
				</div>
				<div className="card">
					<div className="card-block">
						Comment for here
					</div>
				</div>
				<div className="card">
					<div className="card-block">
						Comment list down here
					</div>
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(PostDetail);
