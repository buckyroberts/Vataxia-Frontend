import React, {Component} from 'react';
import Post from '../../../components/Post';
import './Posts.scss';


class Posts extends Component {

    renderPosts() {
        return [1, 2].map(post =>
            <Post
                key={post}
                rank={post}
            />
        );
    }

    render() {
        return (
            <div className="card Posts">
                <div className="card-block">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }

}

export default Posts;
