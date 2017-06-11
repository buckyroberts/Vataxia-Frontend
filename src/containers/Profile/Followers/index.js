import React, {Component} from 'react';
import {connect} from 'react-redux';
import FollowingUser from '../../../components/FollowingUser';


class Followers extends Component {

    renderFollowers() {
        return [1, 2].map(id =>
            <FollowingUser
                id={id}
                key={id}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderFollowers()}
            </div>
        );
    }

}

export default connect(state => ({}))(Followers);
