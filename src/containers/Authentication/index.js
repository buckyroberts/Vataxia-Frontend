import React, {Component} from 'react';
import Navigation from '../../components/Navigation';


class Authentication extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Authentication;
