import React, {Component} from 'react';

class Login extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Login;
