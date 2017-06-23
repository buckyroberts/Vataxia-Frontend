import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../../../../actions/posts/post/create';
import {renderInput} from '../../../../utils/redux-form-fields';


class PostForm extends Component {

	formSubmit = data => {
		const {activeUser, dispatch} = this.props;
		dispatch(createPost({
			...data,
			user: activeUser.id
		}));
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<Field component={renderInput} label="Title" name="title" type="title"/>
				<Field component={renderInput} label="Body" name="body" type="body"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}

}

PostForm = reduxForm({
	form: 'PostForm'
})(PostForm);

export default connect(state => ({
	activeUser: state.activeUser
}))(PostForm);
