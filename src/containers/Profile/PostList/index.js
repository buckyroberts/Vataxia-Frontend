import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostList} from '../../../actions/posts/post/list';
import PostListItem from '../../../components/PostListItem';
import PostForm from '../../../forms/PostForm';
import './PostList.scss';


class PostList extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPostList());
    }

    renderPostList() {
        const {params: {userId}, posts} = this.props;
        if (Object.values(posts).length === 0) return null;
        return Object.values(posts)
            .filter(post => post.user === Number(userId))
            .map((post, i) =>
                <PostListItem
                    key={post.id}
                    post={post}
                />
            );
    }
    
    renderPostSection() {
        const {posts} = this.props;
        if (Object.values(posts).length === 0) return null;
        return (
            <div className="card">
                <div className="card-block">
                    {this.renderPostList()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="PostList">
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
                {this.renderPostSection()}
            </div>
        );
    }

}

export default connect(state => ({
    posts: state.posts.data
}))(PostList);
