import React, {Component} from 'react';
import './Login.scss'


class Login extends Component {

    render() {
        return (
            <div className="Login">
                <form>
                    <h4>Sign In</h4>
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                    <button className="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }

}

export default Login;
