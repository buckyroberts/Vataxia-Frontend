import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Invitations.scss';


class Invitations extends Component {

    renderAccepted() {
        return (
            <div className="card">
                <div className="card-block">
                    Accepted here
                </div>
            </div>
        );
    }

    renderCreateInvitation() {
        const {activeUser, params: {userId}} = this.props;
        if(activeUser.id !== Number(userId)) return null;
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-block">
                            Create invitation
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPending() {
        const {activeUser, params: {userId}} = this.props;
        if(activeUser.id !== Number(userId)) return null;
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-block">
                            Pending invitations
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSendCredits() {
        const {activeUser, params: {userId}} = this.props;
        if(activeUser.id === Number(userId)) return null;
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-block">
                            Send credits card here
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="Invitations">
                {this.renderCreateInvitation()}
                {this.renderSendCredits()}
                {this.renderPending()}
                <div className="row">
                    <div className="col">
                        {this.renderAccepted()}
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser
}))(Invitations);
