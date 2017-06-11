import React, {Component} from 'react';
import {Link} from 'react-router';
import Navigation from '../../components/Navigation';
import './Profile.scss';


class Profile extends Component {

    renderLeftLink(url, title) {
        return <Link activeClassName="active" className="list-group-item list-group-item-action" to={url}>{title}</Link>;
    }

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
                                    {this.renderLeftLink('/profile/posts', 'Home')}
                                    {this.renderLeftLink('/profile/about', 'About')}
                                    {this.renderLeftLink('/profile/followers', 'Followers')}
                                    {this.renderLeftLink('/profile/following', 'Following')}
                                    {this.renderLeftLink('/profile/photos', 'Photos')}
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
