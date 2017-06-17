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
                                <div className="user-name">Bucky Roberts</div>
                                <div className="list-group">
                                    {this.renderLeftLink('/profile/1/posts', 'Home')}
                                    {this.renderLeftLink('/profile/1/about', 'About')}
                                    {this.renderLeftLink('/profile/1/followers', 'Followers')}
                                    {this.renderLeftLink('/profile/1/following', 'Following')}
                                    {this.renderLeftLink('/profile/1/photos', 'Photos')}
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
