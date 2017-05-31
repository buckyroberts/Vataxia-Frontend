import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import './Account.scss'


class Account extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid Account">
                    <div className="row">
                        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                    <a className="nav-link">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active">Update Password</a>
                                </li>
                            </ul>
                        </nav>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                            <h1>Dashboard</h1>
                            <section className="row text-center placeholders">
                                <div className="col-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs="
                                         width="200" height="200" className="img-fluid rounded-circle"
                                    />
                                    <h4>Label</h4>
                                    <div className="text-muted">Something else</div>
                                </div>
                                <div className="col-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs="
                                         width="200" height="200" className="img-fluid rounded-circle"
                                    />
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                                </div>
                                <div className="col-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs="
                                         width="200" height="200" className="img-fluid rounded-circle"
                                    />
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                                </div>
                                <div className="col-6 col-sm-3 placeholder">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs="
                                         width="200" height="200" className="img-fluid rounded-circle"
                                    />
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                                </div>
                            </section>
                            <h2>Section title</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                        <th>Header</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>Lorem</td>
                                        <td>ipsum</td>
                                        <td>dolor</td>
                                        <td>sit</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>amet</td>
                                        <td>consectetur</td>
                                        <td>adipiscing</td>
                                        <td>elit</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}

export default Account;
