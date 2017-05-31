import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import './Home.scss';


class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Navigation />
                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col-12">
                            Welcome to Vataxia, open source social network. Here are some buttons.
                            <div>
                                <button type="button" className="btn btn-primary">Primary</button>{' '}
                                <button type="button" className="btn btn-secondary">Secondary</button>{' '}
                                <button type="button" className="btn btn-success">Success</button>{' '}
                                <button type="button" className="btn btn-info">Info</button>{' '}
                                <button type="button" className="btn btn-warning">Warning</button>{' '}
                                <button type="button" className="btn btn-danger">Danger</button>{' '}
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            <div role="tabpanel">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-expanded="false">Profile</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div role="tabpanel" className="tab-pane fade active show" id="home" aria-labelledby="home-tab" aria-expanded="true">
                                        First
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" aria-expanded="false">
                                        Second
                                    </div>
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
