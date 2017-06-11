import React, {Component} from 'react';
import './Posts.scss';


class Posts extends Component {

    renderReply() {
        return (
            <div className="media reply">
                <img className="img-fluid" src="http://i.imgur.com/4EMtxHB.png"/>
                <div className="media-body">
                    <div className="user-name">Ashley Jones</div>
                    This is a reply
                </div>
            </div>
        );
    }

    renderPost() {
        return (
            <div className="card panel">
                <div className="card-block">
                    <div className="top">
                        <div className="media">
                            <img className="d-flex" src="http://i.imgur.com/o7Doie2.jpg"/>
                            <div className="media-body">
                                <div className="user-name">Bucky Roberts</div>
                                This is my first post
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <a>Like</a> <a>Delete</a>
                    </div>
                    <div className="bottom">
                        {this.renderReply()}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Posts">
                {this.renderPost()}
            </div>
        );
    }

}

export default Posts;
