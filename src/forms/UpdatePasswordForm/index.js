import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import {updatePassword} from '../../actions/accounts/user/authentication';
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
					error: error.response.data,
					success: null
				});
			});
	};

	renderErrors = () => {
		const {error} = this.state;
		if(!error) return;
		return Object.keys(error)
			.map(key => <div key={key}>{`${key} - ${error[key]}`}</div>);
	};

	renderSuccess = () => {
		const {success} = this.state;
		if(!success) return;
		return success;
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<div className="mb-2 text-danger">{this.renderErrors()}</div>
				<div className="mb-2 text-success">{this.renderSuccess()}</div>
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
