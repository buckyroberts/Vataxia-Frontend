import React, {Component} from 'react';
import './Register.scss'


class Register extends Component {

    render() {
        return (
            <div className="Register">
                <div className="card">
                    <form>
                        <h4>Register</h4>
                        <input type="email" id="email" className="form-control" placeholder="Email address" />
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                        <button className="btn btn-primary btn-block" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Register;
