import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import PostListItem from '../../components/PostListItem';
import './Home.scss';
import Login from "./Login";


class Home extends Component {

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
					<li className="nav-item">
						<a className="nav-link" id="following-tab" data-toggle="tab" href="#following" role="tab"
						   aria-controls="following" aria-expanded="false">Following</a>
					</li>
				</ul>
				<div className="tab-content">
					<div role="tabpanel" className="tab-pane fade active show" id="all" aria-labelledby="all-tab"
						 aria-expanded="true">
						{this.renderPosts()}
					</div>
					<div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab"
						 aria-expanded="false">
						Following
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
						<div className="col-9">
							{this.renderTabs()}
						</div>
						<div className="col-3">
							<Login />
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Home;
