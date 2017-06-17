import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './PostListItem.scss';


class PostListItem extends Component {

	renderContent() {
		return (
			<div className="content">
				<Link className="title" to="/profile/1/posts/1">This is the title of the post</Link>
				<div className="details">
					<a className="user">Bucky Roberts</a>
					{' · '}
					<span className="date">8/9/17</span>
				</div>
				<a className="comments">4 comments</a>
			</div>
		);
	}

	renderThumbnail() {
		return (
			<div className="thumbnail-container">
				<a href="#">
					<img src="//b.thumbs.redditmedia.com/0bLGwYM2y0cUimoA7D7lNO3KYMBfZQGLgeYQrdqCOmk.jpg"
						 className="thumbnail"/>
				</a>
			</div>
		);
	}

	renderVotes() {
		return (
			<div className="votes">
				<a className="up-arrow">
					<i className="fa fa-arrow-up up-voted"/>
				</a>
				<div className="score up-voted">
					26
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

export default connect(state => ({}))(PostListItem);
