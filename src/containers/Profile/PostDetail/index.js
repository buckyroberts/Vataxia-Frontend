import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost} from '../../../actions/posts/post/get';
import PostListItem from '../../../components/PostListItem';
import {getUsersFullName} from '../../../utils/user';
import './PostDetail.scss'


class PostDetail extends Component {

	componentDidMount() {
		const {dispatch, params: {postId}} = this.props;
		dispatch(getPost(postId));
	}

	renderReplyForm() {
		return (
			<div className="card reply-form">
				<div className="card-block">
					<form>
						<div className="form-group">
							<textarea className="form-control" id="exampleTextarea" rows="3"/>
						</div>
						<button type="submit" className="btn btn-primary">Comment</button>
					</form>
				</div>
			</div>
		);
	}

	renderReplyList() {
		const {post, postReplies, users} = this.props;
		return Object.values(postReplies)
			.filter(postReply => postReply.post === post.id)
			.map(postReply =>
				<div className="media reply" key={postReply.id}>
					<a href="">
						<img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
					</a>
					<div className="media-body">
						<a className="user" href="">{getUsersFullName(users, postReply.user)}</a>
						<span className="date"> · {postReply.modified_date}</span>
						<div className="content">{postReply.body}</div>
					</div>
				</div>
			);
	}

	renderReplySection() {
		return (
			<div className="card reply-section">
				<div className="card-block">
					{this.renderReplyList()}
				</div>
			</div>
		);
	}

	renderPostOverview() {
		const {post} = this.props;
		return (
			<div className="card post-overview">
				<div className="card-block">
					<PostListItem
						key={post.id}
						post={post}
					/>
				</div>
			</div>
		);
	}

	render() {
		const {post} = this.props;
		if(!post) return null;
		return (
			<div className="PostDetail">
				{this.renderPostOverview()}
				{this.renderReplyForm()}
				{this.renderReplySection()}
			</div>
		);
	}

}

export default connect((state, props) => ({
	post: state.posts.data[props.params.postId],
	postReplies: state.postReplies.data,
	users: state.users.data,
}))(PostDetail);
