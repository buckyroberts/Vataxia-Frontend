import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getUser} from '../../../actions/accounts/user/get';
import {getUsersFullName} from '../../../utils/user';
import './Compose.scss';


class Compose extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getUser(userId));
    }
    
    renderHeader() {
        const {activeUser, receiver, users} = this.props;
        return (
            <div className="media">
                <Link to={`/profile/${activeUser.id}/posts`}>
                    <img className="d-flex" src="http://i.imgur.com/uuykYlB.png"/>
                </Link>
                <div className="media-body">
                    <Link className="user" to={`/profile/${activeUser.id}/posts`}>
                        {getUsersFullName(users, activeUser.id)}
                    </Link>
                    <div className="details">
                        to{' '}
                        <Link className="receiver" to={`/profile/${receiver.id}/posts`}>
                            {getUsersFullName(users, receiver.id)}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {receiver} = this.props;
        if (!receiver) return null;
        return (
            <div className="Compose">
                <div className="card">
                    <div className="card-block">
                        <div className="header">
                            {this.renderHeader()}
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="subject" className="form-control" id="subject" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleTextarea" rows="3"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => ({
    activeUser: state.activeUser,
    receiver: state.users.data[props.params.userId],
    users: state.users.data,
}))(Compose);
