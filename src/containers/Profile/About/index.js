import React, {Component} from 'react';
import {connect} from 'react-redux';


class About extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    About section
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(About);
