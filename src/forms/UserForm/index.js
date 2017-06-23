import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {editUser} from '../../actions/accounts/user/edit';
import {renderInput} from '../../utils/redux-form-fields';


class UserForm extends Component {

	state = {
		error: null,
		success: null
	};

	formSubmit = data => {
		const {activeUser, dispatch} = this.props;
		dispatch(editUser({
			...activeUser,
			...data
		}))
			.then(() => {
				this.setState({
					error: null,
					success: 'User information updated'
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
				<Field component={renderInput} label="First name" name="first_name"/>
				<Field component={renderInput} label="Last name" name="last_name"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}

}

UserForm = reduxForm({
	form: 'UserForm'
})(UserForm);

export default connect(state => ({
	activeUser: state.activeUser,
	enableReinitialize: true,
	initialValues: state.activeUser
}))(UserForm);
