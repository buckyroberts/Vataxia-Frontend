import React, {Component} from 'react';


class Authentication extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h3>Authentication</h3>
                {this.props.children}
            </div>
        );
    }

}

export default Authentication;
