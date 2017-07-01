import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';
import PropTypes from 'prop-types';
import {createTransfer} from '../../actions/credits/transfer/create';
import FormStatus from '../../components/FormStatus';
import {renderInput} from '../../utils/redux-form-fields';


class TransferForm extends Component {

    state = {
        error: null,
        success: null
    };

    formSubmit = data => {
        const {dispatch, receiver} = this.props;

        console.log({
            ...data,
            receiver: receiver
        });

        dispatch(createTransfer({
            ...data,
            receiver: receiver
        }))
            .then(() => {
                dispatch(reset('TransferForm'));
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
                <Field component={renderInput} label="Amount" name="amount"/>
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        );
    }

}

TransferForm.propTypes = {
    receiver: PropTypes.number.isRequired,
};

TransferForm = reduxForm({
    form: 'TransferForm'
})(TransferForm);

export default connect(state => ({
    activeUser: state.activeUser
}))(TransferForm);
