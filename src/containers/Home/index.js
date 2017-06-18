import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostList} from '../../actions/posts/post/post-list';
import Navigation from '../../components/Navigation';
import PostListItem from '../../components/PostListItem';
import './Home.scss';


class Home extends Component {

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getPostList());
	}

	renderPosts() {
		return [1, 2, 3, 4, 5].map(post =>
			<PostListItem key={post}>
				<div className="rank-container">
					<div className="rank">
						{post}
					</div>
				</div>
			</PostListItem>
		);
	}

	renderTabs() {
		return (
			<div role="tabpanel">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab"
						   aria-controls="all" aria-expanded="true">All</a>
					</li>
				</ul>
				<div className="tab-content">
					<div role="tabpanel" className="tab-pane fade active show" id="all" aria-labelledby="all-tab"
						 aria-expanded="true">
						{this.renderPosts()}
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="Home">
				<Navigation />
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							{this.renderTabs()}
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default connect(state => ({}))(Home);
