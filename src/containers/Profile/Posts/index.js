import React, {Component} from 'react';
import './Posts.scss';


class Posts extends Component {

    renderReply() {
        return (
            <div className="media">
                <img className="img-fluid mr-3" src="http://i.imgur.com/4EMtxHB.png"/>
                <div className="media-body">
                    <h5 className="mt-0">Ashley Jones</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                    purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        );
    }

    renderPost() {
        return (
            <div className="card panel">
                <div className="card-block">
                    <h4 className="card-title">Post Title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Date of Post</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a className="card-link">Like</a>
                    <a className="card-link">Delete</a>
                    {this.renderReply()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Posts">
                {this.renderPost()}
                {this.renderPost()}
            </div>
        );
    }

}

export default Posts;
