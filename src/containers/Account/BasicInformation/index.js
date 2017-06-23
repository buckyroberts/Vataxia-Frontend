import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserForm from '../../../forms/UserForm';


class BasicInformation extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <UserForm/>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(BasicInformation);
