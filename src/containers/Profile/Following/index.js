import React, {Component} from 'react';
import {connect} from 'react-redux';
import FollowingUser from '../../../components/FollowingUser';


class Following extends Component {

    renderFollowing() {
        return [1, 2].map(id =>
            <FollowingUser id={id} key={id}>
                <div className="d-flex ml-auto right-container">
                    <div className="right-content">
                        <button type="button" className="btn btn-primary">Unfollow</button>
                    </div>
                </div>
            </FollowingUser>
        );
    }

    render() {
        return (
            <div>
                {this.renderFollowing()}
            </div>
        );
    }

}

export default connect(state => ({}))(Following);
