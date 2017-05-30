import React, {Component} from 'react';


class Profile extends Component {

    renderPost() {
        return (
            <div className="card panel">
                <div className="card-block">
                    <h4 className="card-title">Post Title</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Date of Post</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="card-link">Like</a>
                    <a className="card-link">Delete</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <img src="http://i.imgur.com/o7Doie2.jpg" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <h4>Bucky Roberts</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.renderPost()}
                        {this.renderPost()}
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;
