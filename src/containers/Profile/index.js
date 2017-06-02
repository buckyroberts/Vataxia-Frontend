import React, {Component} from 'react';
import Navigation from '../../components/Navigation';


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Dashboard;
