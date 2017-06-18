import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './PostListItem.scss';


class PostListItem extends Component {
	
	getVoteScoreStyling() {
		if(this.usersVoteValue() === -1) return 'down-voted';
		if(this.usersVoteValue() === 1) return 'up-voted';
	}

	getVoteTally() {
		const {post, postVotes} = this.props;
		return Object.values(postVotes)
			.filter(postVote => postVote.post === post.id)
			.reduce((acc, postVote) => acc + postVote.value, 0);
	}

	handleDownArrowClick = () => {
		if(this.usersVoteValue() === null) {
			console.log('Create a down vote');
		}
		if(this.usersVoteValue() === -1) {
			console.log('DELETE down vote');
		}
		if(this.usersVoteValue() === 1) {
			console.log('PATCH, change 1 to -1');
		}
	};

	handleUpArrowClick = () => {
		if(this.usersVoteValue() === null) {
			console.log('Create an up vote');
		}
		if(this.usersVoteValue() === -1) {
			console.log('PATCH, change -1 to 1');
		}
		if(this.usersVoteValue() === 1) {
			console.log('DELETE up vote');
		}
	};

	renderReplyCount() {
		const {post, postReplies} = this.props;
		const replies = Object.values(postReplies)
			.filter(postReply => postReply.post === post.id);
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
				<Link className="title" to={`/profile/1/posts/${post.id}`}>
					{post.title}
				</Link>
				<div className="details">
					<Link className="user" to={`/profile/1/posts`}>{this.renderUserFullName(post.user)}</Link>
					{' · '}
					<span className="date">{post.created_date}</span>
				</div>
				<Link className="replies" to={`/profile/${post.user}/posts/${post.id}`}>
					{this.renderReplyCount()}
				</Link>
			</div>
		);
	}

	renderThumbnail() {
		const {post} = this.props;
		return (
			<div className="thumbnail-container">
				<Link to={`/profile/${post.user}/posts/${post.id}`}>
					<img className="thumbnail"
						 src="//b.thumbs.redditmedia.com/0bLGwYM2y0cUimoA7D7lNO3KYMBfZQGLgeYQrdqCOmk.jpg"/>
				</Link>
			</div>
		);
	}

	renderVotes() {
		return (
			<div className="votes">
				<a className="up-arrow" onClick={this.handleUpArrowClick}>
					<i className={`fa fa-arrow-up ${this.usersVoteValue() === 1 && 'up-voted'}`}/>
				</a>
				<div className={`score ${this.getVoteScoreStyling()}`}>
					{this.getVoteTally()}
				</div>
				<a className="down-arrow" onClick={this.handleDownArrowClick}>
					<i className={`fa fa-arrow-down ${this.usersVoteValue() === -1 && 'down-voted'}`}/>
				</a>
			</div>
		);
	}

	usersVoteValue() {
		const {activeUser, post, postVotes} = this.props;
		const vote = Object.values(postVotes)
			.filter(postVote => postVote.post === post.id)
			.filter(postVote => postVote.user === activeUser.id);
		if (vote.filter(postVote => postVote.value === -1).length) return -1;
		if (vote.filter(postVote => postVote.value === 1).length) return 1;
		return null;
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
	activeUser: state.activeUser,
	postReplies: state.postReplies.data,
	postVotes: state.postVotes.data,
	users: state.users.data,
}))(PostListItem);
