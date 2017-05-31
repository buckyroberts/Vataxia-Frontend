import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import './Home.scss';


class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Navigation />
                <div className="container-fluid">
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
        );
    }

}

export default Home;
