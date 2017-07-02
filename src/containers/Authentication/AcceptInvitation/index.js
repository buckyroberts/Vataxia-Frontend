import React, {Component} from 'react';
import {Link} from 'react-router';
import AcceptInvitationForm from '../../../forms/AcceptInvitationForm';
import './AcceptInvitation.scss'


class AcceptInvitation extends Component {

    render() {
        const {params} = this.props;
        return (
            <div className="AcceptInvitation">
                <div className="card">
                    <div className="card-block">
                        <div className="heading">Create an Account</div>
                        <AcceptInvitationForm params={params}/>
                        <div className="create-account-container">
                            <Link className="create-account" to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AcceptInvitation;
