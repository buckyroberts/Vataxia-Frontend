import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../../actions/accounts/user/authentication';
import {renderInput} from '../../../utils/redux-form-fields';
import './Login.scss'


class Login extends Component {

    formSubmit = data => {
        const {dispatch} = this.props;
        dispatch(login(data));
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="Login">
                <div className="card">
                    <div className="card-block">
                        <div className="heading">Login</div>
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <Field component={renderInput} label="Email" name="email" type="email"/>
                            <Field component={renderInput} label="Password" name="password" type="password"/>
                            <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                        </form>
                        <div className="create-account-container">
                            <Link className="create-account" to="/accept-invitation">Create an Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Login = reduxForm({
    form: 'Login'
})(Login);

export default connect(state => ({
    activeUser: state.activeUser
}))(Login);
