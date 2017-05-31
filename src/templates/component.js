import React, {Component} from 'react';
import {connect} from 'react-redux';


class Template extends Component {

    render() {
        return (
            <div>
                Sample template
            </div>
        );
    }

}

export default connect(state => ({}))(Template);
