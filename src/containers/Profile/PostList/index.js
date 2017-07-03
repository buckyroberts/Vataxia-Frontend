import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostList} from '../../../actions/posts/post/list';
import PostListItem from '../../../components/PostListItem';
import PostForm from '../../../forms/PostForm';
import './PostList.scss';


class PostList extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getPostList({
            user: userId
        }));
    }

    renderPostFormSection() {
        const {activeUser, params: {userId}} = this.props;
        if (!activeUser || activeUser.id !== Number(userId)) return null;
        return (
            <div role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="post-tab" data-toggle="tab" href="#post" role="tab"
                           aria-controls="post" aria-expanded="true">Post</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade active show" id="post" aria-labelledby="post-tab"
                         aria-expanded="true">
                        <PostForm/>
                    </div>
                </div>
            </div>
        );
    }

    renderPostList(postList) {
        return postList
            .map(post =>
                <PostListItem
                    key={post.id}
                    post={post}
                />
            );
    }

    renderPostSection() {
        const {params: {userId}, posts} = this.props;
        const postList = Object.values(posts)
            .filter(post => post.user === Number(userId));
        if (postList.length === 0) return null;
        return (
            <div className="card post-section">
                <div className="card-block">
                    {this.renderPostList(postList)}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="PostList">
                {this.renderPostFormSection()}
                {this.renderPostSection()}
            </div>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
    posts: state.posts.data
}))(PostList);
