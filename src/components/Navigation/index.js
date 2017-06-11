import React, {Component} from 'react';
import {Link} from 'react-router';


class Navigation extends Component {

	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>
				<Link className="navbar-brand" to="/">Vataxia</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/profile/posts">Profile</Link>
						</li>
					</ul>

					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item">
							<Link className="nav-link" to="/messages/inbox">
								<i className="fa fa-envelope"/>
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="http://example.com"
							   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
							   aria-expanded="false">
								Account
							</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								<Link className="dropdown-item" to="/account/basic-information">Settings</Link>
								<div className="divider"/>
								<Link className="dropdown-item" to="/">Logout</Link>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}

}

export default Navigation;
