import React, {Component} from 'react';
import {connect} from 'react-redux';


class About extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <table>
                        <tbody>
                        <tr>
                            <td>Key</td>
                            <td>Value</td>
                        </tr>
                        <tr>
                            <td>Key</td>
                            <td>Value</td>
                        </tr>
                        <tr>
                            <td>Key</td>
                            <td>Value</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(About);
