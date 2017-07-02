import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AcceptInvitationForm from '../../../forms/AcceptInvitationForm';
import './AcceptInvitation.scss'


class AcceptInvitation extends Component {

    render() {
        return (
            <div className="AcceptInvitation">
                <div className="card">
                    <div className="card-block">
                        <div className="heading">Create an Account</div>
                        <AcceptInvitationForm/>
                        <div className="create-account-container">
                            <Link className="create-account" to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(AcceptInvitation);
