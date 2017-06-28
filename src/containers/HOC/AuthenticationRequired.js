import React, {Component} from 'react';
import {connect} from 'react-redux';
import {normalize} from 'normalizr';
import {hashHistory} from 'react-router';
import actionTypes from '../../config/action-types';
import {setNormalized} from '../../utils/general';
import {USER} from '../../utils/normalize';


export default function(InnerComponent) {

    class AuthenticationRequired extends Component {

        componentDidMount() {
            const {activeUser, dispatch} = this.props;
            if(!activeUser) {
                const data = localStorage.getItem('activeUser');
                if(data) {
                    const {entities} = normalize(JSON.parse(data), USER);
                    setNormalized(dispatch, entities);
                    dispatch({
                        type: actionTypes[`LOGIN_SUCCESS`],
                        payload: JSON.parse(data)
                    });
                } else {
                    hashHistory.push('/login');
                }
            }
        }

        render() {
            const {activeUser} = this.props;
            if(!activeUser) return null;
            return <InnerComponent {...this.props} />;
        }

    }

    return connect(state => ({
        activeUser: state.activeUser
    }))(AuthenticationRequired);

}
