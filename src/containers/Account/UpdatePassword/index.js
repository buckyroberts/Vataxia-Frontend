import React, {Component} from 'react';
import {connect} from 'react-redux';
import UpdatePasswordForm from '../../../forms/UpdatePasswordForm';


class UpdatePassword extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <UpdatePasswordForm/>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(UpdatePassword);
