import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import PropTypes from 'prop-types';
import {createPostReply} from '../../actions/replies/post-reply/create';
import {renderTextArea} from '../../utils/redux-form-fields';


class PostReplyForm extends Component {

	state = {
		error: null
	};

	formSubmit = data => {
		const {activeUser, dispatch, postId} = this.props;
		dispatch(createPostReply({
			...data,
			post: postId,
			user: activeUser.id
		}))
			.then(() => {
				dispatch(reset('PostReplyForm'));
				this.setState({error: null});
			})
			.catch(error => {
				this.setState({error: error.response.data});
			});
	};

	renderErrors = () => {
		const {error} = this.state;
		if(!error) return;
		return Object.keys(error)
			.map(key => <div key={key}>{`${key} - ${error[key]}`}</div>);
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit(this.formSubmit)}>
				<div className="mb-2 text-danger">{this.renderErrors()}</div>
				<Field component={renderTextArea} label="Body" name="body"/>
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}

}

PostReplyForm.propTypes = {
	postId: PropTypes.number.isRequired,
};

PostReplyForm = reduxForm({
	form: 'PostReplyForm'
})(PostReplyForm);

export default connect(state => ({
	activeUser: state.activeUser
}))(PostReplyForm);
