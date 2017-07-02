import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {acceptInvitation} from '../../actions/accounts/user/accept-invitation';
import FormStatus from '../../components/FormStatus';
import {renderInput} from '../../utils/redux-form-fields';


class AcceptInvitationForm extends Component {

    state = {
        error: null,
        success: null
    };

    formSubmit = data => {
        const {dispatch} = this.props;
        dispatch(acceptInvitation(data))
            .then(() => {
                this.setState({error: null});
                hashHistory.push('/');
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
                <Field component={renderInput} label="First name" name="first_name" type="text"/>
                <Field component={renderInput} label="Last name" name="last_name" type="text"/>
                <Field component={renderInput} label="Email" name="email" type="email"/>
                <Field component={renderInput} label="Code" name="code" type="code"/>
                <Field component={renderInput} label="Password" name="password" type="password"/>
                <button className="btn btn-primary btn-block" type="submit">Submit</button>
            </form>
        );
    }

}

AcceptInvitationForm = reduxForm({
    form: 'AcceptInvitationForm'
})(AcceptInvitationForm);

export default connect((state, props) => ({
    activeUser: state.activeUser,
    initialValues: props.params
}))(AcceptInvitationForm);
