import React, {Component} from 'react';
import {connect} from 'react-redux';


class About extends Component {

    render() {
        return (
            <div>
                About
            </div>
        );
    }

}

export default connect(state => ({}))(About);
