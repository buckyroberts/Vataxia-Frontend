import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Post.scss';


class Post extends Component {

    renderVotes() {
        return (
            <div className="votes">
                <div className="up-arrow">
                    <i className="fa fa-arrow-up"/>
                </div>
                <div className="score">
                    26
                </div>
                <div className="down-arrow">
                    <i className="fa fa-arrow-down"/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Post">
                <div className="rank-container">
                    <div className="rank">1</div>
                </div>
                {this.renderVotes()}
                <div className="thumbnail-container">
                    <img src="//b.thumbs.redditmedia.com/0bLGwYM2y0cUimoA7D7lNO3KYMBfZQGLgeYQrdqCOmk.jpg" className="thumbnail"/>
                </div>
                <div className="content">
                    <div className="title">This is the title of the post</div>
                    <div className="details">
                        <span className="user">Bucky Roberts</span>
                        {' | '}
                        <span className="date">8/9/17</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(Post);
