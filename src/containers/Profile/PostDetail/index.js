import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostListItem from '../../../components/PostListItem';
import './PostDetail.scss'


class PostDetail extends Component {

	renderCommentForm() {
		return (
			<div className="card comment-form">
				<div className="card-block">
					<form>
						<div className="form-group">
							<textarea className="form-control" id="exampleTextarea" rows="3"/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}

	renderCommentList() {
		return [1, 2, 3, 4, 5].map(comment =>
			<div className="media comment">
				<a href="#">
					<img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
				</a>
				<div className="media-body">
					<a className="user" href="#">Emily May</a>
					<span className="date"> · 6/17/2017</span>
					<div className="content">This is a sample comment</div>
				</div>
			</div>
		);
	}

	renderCommentSection() {
		return (
			<div className="card comment-section">
				<div className="card-block">
					{this.renderCommentList()}
				</div>
			</div>
		);
	}

	renderPostOverview() {
		return (
			<div className="card post-overview">
				<div className="card-block">
					<PostListItem/>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="PostDetail">
				{this.renderPostOverview()}
				{this.renderCommentForm()}
				{this.renderCommentSection()}
			</div>
		);
	}

}

export default connect(state => ({}))(PostDetail);
