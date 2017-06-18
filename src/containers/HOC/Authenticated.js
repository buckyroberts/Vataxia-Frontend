import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import actionTypes from '../../config/action-types';


export default function (InnerComponent) {
	
	class Authenticated extends Component {
		
		componentWillMount() {
			const {activeUser, dispatch} = this.props;
			if (!activeUser) {
				const user = localStorage.getItem('activeUser');
				if (user) {
					dispatch({
						type: actionTypes[`LOGIN_SUCCESS`],
						payload: JSON.parse(user)
					});
				} else {
					hashHistory.push('/login');
				}
			}
		}

		render() {
			const {activeUser} = this.props;
			if (!activeUser) return null;
			return <InnerComponent {...this.props} />;
		}
		
	}

	return connect(state => ({
		activeUser: state.activeUser
	}))(Authenticated);
	
}
