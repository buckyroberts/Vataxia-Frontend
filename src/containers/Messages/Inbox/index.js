import React, {Component} from 'react';
import {connect} from 'react-redux';


class Inbox extends Component {

    render() {
        return (
            <div>Inbox</div>
        );
    }

}

export default connect(state => ({}))(Inbox);
