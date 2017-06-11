import React, {Component} from 'react';
import {connect} from 'react-redux';


class BasicInformation extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <form>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="first_name" className="form-control" id="first_name" defaultValue="Bucky"/>
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="last_name" className="form-control" id="last_name" defaultValue="Roberts"/>
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(BasicInformation);
