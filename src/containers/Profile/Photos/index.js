import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Photos.scss';


class Photos extends Component {

	renderContent() {
		return (
			<div className="content">
				<a className="title" href="#">This is the title of the post</a>
				<div className="details">
					<a className="user">Bucky Roberts</a>
					{' · '}
					<span className="date">8/9/17</span>
				</div>
				<a className="replies">4 replies</a>
			</div>
		);
	}

	renderImages() {
		const images = [
			'http://i.imgur.com/b9kVohU.jpg',
			'https://i.redditmedia.com/eP-BX8p2uA2nLz4JMCTvH4FXjei3aHLeduSpaZVn6yE.jpg?w=451&s=2b4674e6d4163c37771a573750e7ea32',
			'http://i.imgur.com/8vCUis7.jpg',
			'http://i.imgur.com/2ZwwiqU.png',
			'http://i.imgur.com/clpy8NN.png',
			'http://i.imgur.com/DEYHVgU.jpg',
			'http://i.imgur.com/CqXcsZ9.png',
			'http://i.imgur.com/2yGcoe2.jpg',
			'https://i.imgur.com/cakHwtK.jpg',
			'https://i.imgur.com/uFzFj0l.jpg',
		];
		return images.map((image, i) =>
			<div className="card" key={i}>
				<img className="card-img-top img-fluid" src={image}/>
				{this.renderContent()}
			</div>
		);
	}

	render() {
		return (
			<div className="card-columns Photos">
				{this.renderImages()}
			</div>
		);
	}

}

export default connect(state => ({}))(Photos);
