import React, {Component} from 'react';
import {connect} from 'react-redux';
import FollowingUser from '../../../components/FollowingUser';
import './Invitations.scss';


class Invitations extends Component {

    renderAccepted() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="card-title">Accepted</div>
                    <div>
                        <FollowingUser/>
                        <FollowingUser/>
                    </div>
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
                            <div className="card-title">Create Invitation</div>
                            <div className="content">Balance: 20 credits</div>
                            <button className="btn btn-primary">Create</button>
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
                            <div className="card-title">Pending Invitations</div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>URL</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>abc-123</td>
                                    <td>http://vataxia.io/accept/abc-123</td>
                                </tr>
                                <tr>
                                    <td>abc-123</td>
                                    <td>http://vataxia.io/accept/abc-123</td>
                                </tr>
                                </tbody>
                            </table>
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
                            <div className="card-title">Send Credits</div>
                            <div className="content">
                                <div>Balance: 20 credits</div>
                                <div>Amount: input here</div>
                            </div>
                            <button className="btn btn-primary">Send</button>
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
