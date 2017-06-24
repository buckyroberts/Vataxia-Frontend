import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'


class LeftMenu extends Component {

    render() {
        return (
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/account/basic-information">Basic
                            Information</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/account/update-password">Update
                            Password</Link>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default connect(state => ({}))(LeftMenu);
