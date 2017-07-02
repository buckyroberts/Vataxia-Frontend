import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import PropTypes from 'prop-types';
import {createPostReply} from '../../actions/replies/post-reply/create';
import FormStatus from '../../components/FormStatus';
import {renderTextArea} from '../../utils/redux-form-fields';


class PostReplyForm extends Component {

    state = {
        error: null,
        success: null
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

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.formSubmit)}>
                <FormStatus formState={this.state}/>
                <Field component={renderTextArea} label="Reply" name="body"/>
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
