import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'


class LeftMenu extends Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/messages/inbox">Inbox</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/messages/sent">Sent</Link>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default connect(state => ({}))(LeftMenu);
