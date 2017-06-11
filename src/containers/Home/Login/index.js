import React, {Component} from 'react';
import {Link} from 'react-router';
import './Login.scss'


class Login extends Component {

    render() {
        return (
            <div className="Login">
                <div className="card">
                    <div className="card-block">
                        <form>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                            <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                        </form>
                        <div className="create-account-container">
                            <Link className="create-account" to="/register">Create an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
