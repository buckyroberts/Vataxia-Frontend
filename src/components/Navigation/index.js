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

    renderAccountDropdown() {
        return (
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
        );
    }

    renderDevelopersDropdown() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=""
                   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                    Developers
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="http://vataxia.net/" target="_blank">
                        API Docs
                    </a>
                    <a className="dropdown-item" href="https://github.com/buckyroberts/Vataxia" target="_blank">
                        Backend (GitHub)
                    </a>
                    <a className="dropdown-item" href="https://github.com/buckyroberts/Vataxia-Frontend" target="_blank">
                        Frontend (GitHub)
                    </a>
                    <a className="dropdown-item" href="https://www.reddit.com/r/Vataxia/" target="_blank">
                        Reddit
                    </a>
                    <a className="dropdown-item" href="https://vataxia.slack.com/" target="_blank">
                        Slack
                    </a>
                </div>
            </li>
        );
    }

    renderToggleButton() {
        return (
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
        );
    }

    renderUnauthenticatedMenu() {
        const {activeUser} = this.props;
        if(activeUser) return null;
        return (
            <ul className="nav navbar-nav ml-auto">
                {this.renderDevelopersDropdown()}
                <li className="nav-item">
                    <Link className="nav-link" to="/accept-invitation">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Sign In
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
                {this.renderAccountDropdown()}
                {this.renderDevelopersDropdown()}
                <li className="nav-item">
                    <Link className="nav-link" to={`/profile/${activeUser.id}/posts`}>
                        My Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        Users
                    </Link>
                </li>
            </ul>
        );
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                {this.renderToggleButton()}
                <Link className="navbar-brand" to="/">
                    <img src="http://i.imgur.com/hcDyDui.png"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {this.renderUnauthenticatedMenu()}
                    {this.renderUserControls()}
                </div>
            </nav>
        );
    }

}

export default connect(state => ({
    activeUser: state.activeUser,
}))(Navigation);
