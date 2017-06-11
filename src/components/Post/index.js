import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Post.scss';


class Post extends Component {

    renderContent() {
        return (
            <div className="content">
                <a className="title" href="#">This is the title of the post</a>
                <div className="details">
                    <span className="user">Bucky Roberts</span>
                    {' · '}
                    <span className="date">8/9/17</span>
                </div>
                <a className="comments">4 comments</a>
            </div>
        );
    }

    renderRank() {
        const {rank} = this.props;
        return (
            <div className="rank-container">
                <div className="rank">
                    {rank}
                </div>
            </div>
        );
    }

    renderThumbnail() {
        return (
            <div className="thumbnail-container">
                <a href="#">
                    <img src="//b.thumbs.redditmedia.com/0bLGwYM2y0cUimoA7D7lNO3KYMBfZQGLgeYQrdqCOmk.jpg" className="thumbnail"/>
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
        return (
            <div className="Post">
                {this.renderRank()}
                {this.renderVotes()}
                {this.renderThumbnail()}
                {this.renderContent()}
            </div>
        );
    }

}

export default connect(state => ({}))(Post);
