import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import Administrators from './Administrators';
import Moderators from './Moderators';
import RegularUsers from './RegularUsers';
import './Users.scss'


class Users extends Component {

    render() {
        return (
            <div className="Users">
                <Navigation />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#all" role="tab">
                                        All
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#moderators" role="tab">
                                        Moderators
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#admins" role="tab">
                                        Administrators
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="all" role="tabpanel">
                                    <RegularUsers/>
                                </div>
                                <div className="tab-pane" id="moderators" role="tabpanel">
                                    <Moderators/>
                                </div>
                                <div className="tab-pane" id="admins" role="tabpanel">
                                    <Administrators/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Users;
