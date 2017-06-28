import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory, Link} from 'react-router';
import {logout} from '../../actions/accounts/user/authentication';


class Navigation extends Component {

    logoutUser = () => {
        const {dispatch} = this.props;
        dispatch(logout());
        hashHistory.push('/');
    };

    renderLogin() {
        const {activeUser} = this.props;
        if(activeUser) return null;
        return (
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );
    }

    renderUserControls() {
        const {activeUser} = this.props;
        if(!activeUser) return null;
        return (
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/messages/inbox">
                        <i className="fa fa-envelope"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        Users
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/profile/${activeUser.id}/posts`}>
                        Profile
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href=""
                       id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        Account
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/account/basic-information">Settings</Link>
                        <div className="divider"/>
                        <a className="dropdown-item" href="" onClick={this.logoutUser}>Logout</a>
                    </div>
                </li>
            </ul>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <Link className="navbar-brand" to="/">Vataxia</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {this.renderLogin()}
                    {this.renderUserControls()}
                </div>
            </nav>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
}))(Navigation);
