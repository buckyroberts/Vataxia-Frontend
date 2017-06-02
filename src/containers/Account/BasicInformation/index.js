import React, {Component} from 'react';
import {connect} from 'react-redux';


class BasicInformation extends Component {

	render() {
		return (
			<div>Basic Information</div>
		);
	}

}

export default connect(state => ({}))(BasicInformation);
