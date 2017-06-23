import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from '../../utils/redux-form-fields';


class UpdatePasswordForm extends Component {

	formSubmit = data => {
		const {dispatch} = this.props;
		console.log(data)
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
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
