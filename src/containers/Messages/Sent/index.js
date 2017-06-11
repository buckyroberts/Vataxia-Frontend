import React, {Component} from 'react';
import {connect} from 'react-redux';


class Sent extends Component {

    render() {
        return (
            <div>Sent</div>
        );
    }

}

export default connect(state => ({}))(Sent);
