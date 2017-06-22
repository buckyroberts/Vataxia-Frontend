import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getUser} from '../../actions/accounts/user/get';
import Navigation from '../../components/Navigation';
import './Profile.scss';


class Profile extends Component {

	componentDidMount() {
		const {dispatch, params: {userId}} = this.props;
		dispatch(getUser(userId));
	}

	renderLeftLink(url, title) {
		return <Link activeClassName="active" className="list-group-item list-group-item-action" to={url}>{title}</Link>;
	}

	render() {
		const {user} = this.props;
		if (!user) return null;
		return (
			<div>
				<Navigation />
				<div className="container-fluid">
					<div className="Profile">
						<div className="row">
							<div className="col-2">
								<img src="http://i.imgur.com/uuykYlB.png" className="img-fluid"/>
								<div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
								<div className="list-group">
									{this.renderLeftLink(`/profile/${user.id}/posts`, 'Home')}
									{this.renderLeftLink(`/profile/${user.id}/about`, 'About')}
									{this.renderLeftLink(`/profile/${user.id}/photos`, 'Photos')}
								</div>
							</div>
							<div className="col-10">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default connect((state, props) => ({
	user: state.users.data[props.params.userId],
}))(Profile);
