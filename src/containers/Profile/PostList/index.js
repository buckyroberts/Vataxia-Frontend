import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostList} from '../../../actions/posts/post/list';
import PostListItem from '../../../components/PostListItem';
import PostForm from '../../../forms/PostForm';
import './PostList.scss';


class PostList extends Component {

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getPostList());
	}

	renderPosts() {
		const {params: {userId}, posts} = this.props;
		return Object.values(posts)
			.filter(post => post.user === Number(userId))
			.map((post, i) =>
				<PostListItem
					key={post.id}
					post={post}
				/>
			);
	}

	render() {
		return (
			<div className="PostList">
				<div role="tabpanel">
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" id="text-tab" data-toggle="tab" href="#text" role="tab"
							   aria-controls="text" aria-expanded="true">Text</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="photo-tab" data-toggle="tab" href="#photo" role="tab"
							   aria-controls="photo" aria-expanded="false">Photo</a>
						</li>
					</ul>
					<div className="tab-content">
						<div role="tabpanel" className="tab-pane fade active show" id="text" aria-labelledby="text-tab"
							 aria-expanded="true">
							<PostForm/>
						</div>
						<div className="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab"
							 aria-expanded="false">
							<PostForm/>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-block">
						{this.renderPosts()}
					</div>
				</div>
			</div>
		);
	}

}

export default connect(state => ({
	posts: state.posts.data
}))(PostList);
