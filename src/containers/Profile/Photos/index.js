import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Photos.scss';


class Photos extends Component {

    render() {
        return (
            <div className="card-columns Photos">
                <div className="card">
                    <img className="card-img-top img-fluid" src="http://i.imgur.com/8vCUis7.jpg"/>
                    <div className="card-block">
                        <h4 className="card-title">Card title that wraps to a new line</h4>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card p-3">
                    <blockquote className="card-block card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card">
                    <img className="card-img-top img-fluid" src="http://i.imgur.com/2ZwwiqU.png"/>
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card card-inverse card-primary p-3 text-center">
                    <blockquote className="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer>
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card text-center">
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional
                            content.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img img-fluid" src="http://i.imgur.com/clpy8NN.png"/>
                </div>
                <div className="card p-3 text-right">
                    <blockquote className="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(state => ({}))(Photos);
