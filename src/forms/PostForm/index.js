import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../../actions/posts/post/create';
import {renderInput, renderTextArea} from '../../utils/redux-form-fields';


class PostForm extends Component {

	formSubmit = data => {
		const {activeUser, dispatch} = this.props;
		dispatch(createPost({
			...data,
			user: activeUser.id
		}))
			.then(entities => {
				const post = Object.values(entities['POSTS'])[0];
				hashHistory.push(`/profile/${post.user}/posts/${post.id}`);
			})
			.catch(error => {});
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<Field component={renderInput} label="Title" name="title"/>
				<Field component={renderTextArea} label="Body" name="body"/>
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
