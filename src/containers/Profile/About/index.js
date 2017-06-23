import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../../actions/accounts/user/get';
import './About.scss';


class About extends Component {

    componentDidMount() {
        const {dispatch, params: {userId}} = this.props;
        dispatch(getUser(userId));
    }

    renderRow(key, value) {
        if(!value) return;
        return (
            <tr>
                <td className="key">{key}:</td>
                <td className="value">{value}</td>
            </tr>
        );
    }

    render() {
        const {user} = this.props;
        if(!user) return;
        return (
            <div className="card About">
                <div className="card-block">
                    <table>
                        <tbody>
                        {this.renderRow('Name', `${user.first_name} ${user.last_name}`)}
                        {this.renderRow('Email', user.email)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => ({
    user: state.users.data[props.params.userId],
}))(About);
