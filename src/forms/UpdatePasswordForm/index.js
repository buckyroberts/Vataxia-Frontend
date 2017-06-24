import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import {updatePassword} from '../../actions/accounts/user/authentication';
import FormStatus from '../../components/FormStatus';
import {renderInput} from '../../utils/redux-form-fields';


class UpdatePasswordForm extends Component {

    state = {
        error: null,
        success: null
    };

    formSubmit = data => {
        const {dispatch} = this.props;
        dispatch(updatePassword(data))
            .then(() => {
                dispatch(reset('UpdatePasswordForm'));
                this.setState({
                    error: null,
                    success: 'Password updated'
                });
            })
            .catch(error => {
                this.setState({
                    error: error.response.data || {Error: error.response.statusText},
                    success: null
                });
            });
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.formSubmit)}>
                <FormStatus formState={this.state}/>
                <Field component={renderInput} label="New password" name="password" type="password"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

}

UpdatePasswordForm = reduxForm({
    form: 'UpdatePasswordForm'
})(UpdatePasswordForm);

export default connect(state => ({}))(UpdatePasswordForm);
