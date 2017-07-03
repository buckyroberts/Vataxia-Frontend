import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getPostList} from '../../../actions/posts/post/list';
import './Photos.scss';


class Photos extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getPostList({
            user: userId
        }));
    }

    renderCards() {
        const {params: {userId}, posts} = this.props;
        const postList = Object.values(posts)
            .filter(post => post.user === Number(userId))
            .filter(post => post.image !== null);
        if (postList.length === 0) return null;
        return postList.map(post =>
            <div className="card" key={post.id}>
                <Link to={`/profile/${post.user}/posts/${post.id}`}>
                    <img className="card-img-top img-fluid" src={post.image}/>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="card-columns Photos">
                {this.renderCards()}
            </div>
        );
    }

}

export default connect(state => ({
    posts: state.posts.data
}))(Photos);
