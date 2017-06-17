import React, {Component} from 'react';
import Navigation from '../../components/Navigation';
import LeftMenu from './LeftMenu';
import './Messages.scss'


class Messages extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid Messages">
                    <div className="row">
                        <LeftMenu/>
                        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 p-0">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </div>
        );
    }

}

export default Messages;
