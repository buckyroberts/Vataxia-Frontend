import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './FormStatus.scss';


class FormStatus extends Component {

    renderErrors = () => {
        const {formState: {error}} = this.props;
        if(!error) return;
        return Object.keys(error)
            .map(key => <div key={key}>{`${key} - ${error[key]}`}</div>);
    };

    renderSuccess = () => {
        const {formState: {success}} = this.props;
        if(!success) return;
        return success;
    };

    render() {
        return (
            <div className="FormStatus">
                <span className="text-danger">{this.renderErrors()}</span>
                <span className="text-success">{this.renderSuccess()}</span>
            </div>
        );
    }

}

FormStatus.propTypes = {
    formState: PropTypes.object.isRequired,
};

export default connect(state => ({}))(FormStatus);
