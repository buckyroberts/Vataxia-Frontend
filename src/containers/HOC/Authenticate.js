import React, {Component} from 'react';
import {connect} from 'react-redux';
import {normalize} from 'normalizr';
import actionTypes from '../../config/action-types';
import {setNormalized} from '../../utils/general';
import {USER} from '../../utils/normalize';


export default function(InnerComponent) {

    class Authenticate extends Component {

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
                }
            }
        }

        render() {
            return <InnerComponent {...this.props} />;
        }

    }

    return connect(state => ({
        activeUser: state.activeUser
    }))(Authenticate);

}
