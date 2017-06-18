import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './PostListItem.scss';


class PostListItem extends Component {

	getVoteTally(postId) {
		const {postVotes} = this.props;
		return Object.values(postVotes)
			.filter(postVote => postVote.post === postId)
			.reduce((acc, postVote) => acc + postVote.value, 0);
	}

	renderReplyCount(postId) {
		const {postReplies} = this.props;
		const replies = Object.values(postReplies)
			.filter(postReply => postReply.post === postId);
		return `${replies.length} replies`
	}

	renderUserFullName(userId) {
		const {users} = this.props;
		const {first_name, last_name} = users[userId];
		return `${first_name} ${last_name}`;
	}

	renderContent() {
		const {post} = this.props;
		return (
			<div className="content">
				<Link className="title" to={`/profile/1/posts/${post.id}`}>{post.title}</Link>
				<div className="details">
					<a className="user">{this.renderUserFullName(post.user)}</a>
					{' · '}
					<span className="date">{post.created_date}</span>
				</div>
				<a className="replies">{this.renderReplyCount(post.id)}</a>
			</div>
		);
	}

	renderThumbnail() {
		const {post} = this.props;
		return (
			<div className="thumbnail-container">
				<Link to={`/profile/1/posts/${post.id}`}>
					<img className="thumbnail"
						 src="//b.thumbs.redditmedia.com/0bLGwYM2y0cUimoA7D7lNO3KYMBfZQGLgeYQrdqCOmk.jpg"/>
				</Link>
			</div>
		);
	}

	renderVotes() {
		const {post} = this.props;
		return (
			<div className="votes">
				<a className="up-arrow">
					<i className="fa fa-arrow-up up-voted"/>
				</a>
				<div className="score up-voted">
					{this.getVoteTally(post.id)}
				</div>
				<a className="down-arrow">
					<i className="fa fa-arrow-down"/>
				</a>
			</div>
		);
	}

	render() {
		const {children} = this.props;
		return (
			<div className="PostListItem">
				{children}
				{this.renderVotes()}
				{this.renderThumbnail()}
				{this.renderContent()}
			</div>
		);
	}

}

PostListItem.propTypes = {
	post: PropTypes.object.isRequired,
};

export default connect(state => ({
	postReplies: state.postReplies.data,
	postVotes: state.postVotes.data,
	users: state.users.data,
}))(PostListItem);
