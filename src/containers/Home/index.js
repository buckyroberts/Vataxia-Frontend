import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import Post from '../../components/Post';
import './Home.scss';


class Home extends Component {

    renderPosts() {
        return <Post/>;
    }

    render() {
        return (
            <div className="Home">
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                            <div role="tabpanel">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="following-tab" data-toggle="tab" href="#following" role="tab" aria-controls="following" aria-expanded="true">Following</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-expanded="false">All</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade active show" id="following" aria-labelledby="following-tab" aria-expanded="true">
                                        {this.renderPosts()}
                                    </div>
                                    <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab" aria-expanded="false">
                                        All
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-block">
                                    <button type="button" className="btn btn-primary">New Post</button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
