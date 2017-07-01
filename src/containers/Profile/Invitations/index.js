import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createInvitation} from '../../../actions/credits/invitation/create';
import {getInvitationList} from '../../../actions/credits/invitation/list';
import FollowingUser from '../../../components/FollowingUser';
import './Invitations.scss';


class Invitations extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getInvitationList({
            sender: userId
        }));
    }

    handleCreateInvitation = () => {
        const {dispatch} = this.props;
        dispatch(createInvitation());
        console.log();
    };

    renderAccepted() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="card-title">Accepted</div>
                    <div>
                        {this.renderAcceptedRows()}
                    </div>
                </div>
            </div>
        );
    }

    renderAcceptedRows() {
        const {invitations, params: {userId}, users} = this.props;
        return Object.values(invitations)
            .filter(invitation => invitation.receiver !== null)
            .filter(invitation => invitation.sender === Number(userId))
            .map(invitation => (
                <FollowingUser
                    key={invitation.id}
                    user={users[invitation.receiver]}
                />
            ));
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
                            <button className="btn btn-primary" onClick={this.handleCreateInvitation}>Create</button>
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
                                {this.renderPendingRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPendingRows() {
        const {invitations, params: {userId}} = this.props;
        return Object.values(invitations)
            .filter(invitation => invitation.receiver === null)
            .filter(invitation => invitation.sender === Number(userId))
            .map(invitation => (
                <tr key={invitation.id}>
                    <td>{invitation.code}</td>
                    <td>http://vataxia.io/accept/{invitation.code}</td>
                </tr>
            ));
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
    activeUser: state.activeUser,
    invitations: state.invitations.data,
    users: state.users.data
}))(Invitations);
