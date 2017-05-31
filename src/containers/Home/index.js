import React, {Component} from 'react';
import Navigation from '../../components/Navigation';


class Home extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    Welcome to Vataxia, the greatest website ever.
                </div>
            </div>
        );
    }

}

export default Home;
