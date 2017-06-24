import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {createPrivateMessage} from '../../actions/private-messages/private-message/create';
import FormStatus from '../../components/FormStatus';
import {renderInput, renderTextArea} from '../../utils/redux-form-fields';


class PrivateMessageForm extends Component {

    state = {
        error: null,
        success: null
    };

    formSubmit = data => {
        const {dispatch, receiver} = this.props;
        dispatch(createPrivateMessage({
            ...data,
            receiver: receiver.id
        }))
            .then(entities => {
                const privateMessage = Object.values(entities['PRIVATE_MESSAGES'])[0];
                hashHistory.push(`/messages/read/${privateMessage.id}`);
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
                <Field component={renderInput} label="Subject" name="subject"/>
                <Field component={renderTextArea} label="Body" name="body"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

}

PrivateMessageForm.propTypes = {
    receiver: PropTypes.object.isRequired,
};

PrivateMessageForm = reduxForm({
    form: 'PrivateMessageForm'
})(PrivateMessageForm);

export default connect(state => ({}))(PrivateMessageForm);
