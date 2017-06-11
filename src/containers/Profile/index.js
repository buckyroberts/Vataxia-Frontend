import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigation from '../../components/Navigation';
import './Profile.scss';


class Profile extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    <div className="Profile">
                        <div className="row">
                            <div className="col-2">
                                <img src="http://i.imgur.com/o7Doie2.jpg" className="img-fluid"/>
                                <h4>Bucky Roberts</h4>
                                <div className="list-group">
                                    <Link activeClassName="active" className="list-group-item list-group-item-action" to="/profile/posts">
                                        Home
                                    </Link>
                                    <Link activeClassName="active" className="list-group-item list-group-item-action" to="/profile/about">
                                        About
                                    </Link>
                                    <Link activeClassName="active" className="list-group-item list-group-item-action" to="/profile/followers">
                                        Followers
                                    </Link>
                                    <Link activeClassName="active" className="list-group-item list-group-item-action" to="/profile/following">
                                        Following
                                    </Link>
                                    <Link activeClassName="active" className="list-group-item list-group-item-action" to="/profile/photos">
                                        Photos
                                    </Link>
                                </div>
                            </div>
                            <div className="col-10">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;
