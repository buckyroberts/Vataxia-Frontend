import React, {Component} from 'react';
import {connect} from 'react-redux';


class Post extends Component {

    render() {
        return (
            <div>
                This is a post
            </div>
        );
    }

}

export default connect(state => ({}))(Post);
