import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from '../../../utils/redux-form-fields';
import './Register.scss'


class Register extends Component {

    formSubmit = (data) => {
        const {dispatch} = this.props;
        console.log(data);
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="Register">
                <div className="card">
                    <div className="card-block">
                        <div className="heading">Create an Account</div>
                        <form onSubmit={handleSubmit(this.formSubmit)}>
                            <Field component={renderInput} label="First name" name="first_name" type="text"/>
                            <Field component={renderInput} label="Last name" name="last_name" type="text"/>
                            <Field component={renderInput} label="Email" name="email" type="email"/>
                            <Field component={renderInput} label="Password" name="password" type="password"/>
                            <button className="btn btn-primary btn-block" type="submit">Submit</button>
                        </form>
                        <div className="create-account-container">
                            <Link className="create-account" to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Register = reduxForm({
    form: 'Register'
})(Register);

export default connect(state => ({
    activeUser: state.activeUser
}))(Register);
