import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../../actions/posts/post/create';
import {renderInput, renderTextArea} from '../../utils/redux-form-fields';


class PostForm extends Component {

	state = {
		error: null
	};

	formSubmit = data => {
		const {activeUser, dispatch, posts} = this.props;
		dispatch(createPost({
			...data,
			user: activeUser.id
		}))
			.then(entities => {
				const post = Object.values(entities['POSTS'])[0];
				hashHistory.push(`/profile/${post.user}/posts/${post.id}`);
			})
			.catch(error => {
				this.setState({error: error.response.data});
			});
	};

	renderErrors = () => {
		const {error} = this.state;
		if(!error) return;
		return Object.keys(error)
			.map(key => (
				<div className="text-danger" key={key}>
					{`${key} - ${error[key]}`}
				</div>
			));
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<div className="mb-2">{this.renderErrors()}</div>
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
	activeUser: state.activeUser,
	posts: state.posts
}))(PostForm);
