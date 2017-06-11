import React, {Component} from 'react';
import {connect} from 'react-redux';


class Trash extends Component {

    render() {
        return (
            <div>Trash</div>
        );
    }

}

export default connect(state => ({}))(Trash);
