import React, {Component} from 'react';
import {connect} from 'react-redux';


class UpdatePassword extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <form>
                        <div className="form-group">
                            <label>Old password</label>
                            <input type="password" className="form-control" id="old_password"/>
                        </div>
                        <div className="form-group">
                            <label>New password</label>
                            <input type="password" className="form-control" id="new_password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(UpdatePassword);
