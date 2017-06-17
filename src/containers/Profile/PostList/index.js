import React, {Component} from 'react';
import PostListItem from '../../../components/PostListItem';
import './PostList.scss';


class PostList extends Component {

    renderPosts() {
        return [1, 2].map(post =>
            <PostListItem key={post}>
                <div className="rank-container">
                    <div className="rank">
						{post}
                    </div>
                </div>
            </PostListItem>
        );
    }

    render() {
        return (
            <div className="PostList">
                <div role="tabpanel">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="text-tab" data-toggle="tab" href="#text" role="tab" aria-controls="text" aria-expanded="true">Text</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="photo-tab" data-toggle="tab" href="#photo" role="tab" aria-controls="photo" aria-expanded="false">Photo</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade active show" id="text" aria-labelledby="text-tab" aria-expanded="true">
                            <form>
                                <input className="form-control" type="title" id="title" placeholder="Title" />
                                <textarea className="form-control" id="description" rows="3"/>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab" aria-expanded="false">
                            <form>
                                <div>DROPZONE HERE</div>
                                <input className="form-control" type="title" id="title" placeholder="Title" />
                                <textarea className="form-control" id="description" rows="3"/>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-block">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }

}

export default PostList;
