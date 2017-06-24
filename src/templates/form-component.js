import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from '../utils/redux-form-fields';


class SampleForm extends Component {

    state = {
        error: null,
        success: null
    };

    formSubmit = data => {
        const {dispatch} = this.props;
        console.log(data)
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.formSubmit)}>
                <Field component={renderInput} label="Sample" name="sample" type="text"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

}

SampleForm = reduxForm({
    form: 'SampleForm'
})(SampleForm);

export default connect(state => ({}))(SampleForm);
