import React, {Component} from 'react';
import {connect} from 'react-redux';


class UpdatePassword extends Component {

    render() {
        return (
            <div>
                Update password
            </div>
        );
    }

}

export default connect(state => ({}))(UpdatePassword);
