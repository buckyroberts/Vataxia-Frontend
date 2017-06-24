import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {hashHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../../actions/posts/post/create';
import FormStatus from '../../components/FormStatus';
import {renderInput, renderTextArea} from '../../utils/redux-form-fields';
import './PostForm.scss';


class PostForm extends Component {

    state = {
        error: null,
        files: [],
        success: null
    };

    formSubmit = data => {
        const {activeUser, dispatch, posts} = this.props;
        dispatch(createPost({
            ...data,
            image: this.state.files[0],
            user: activeUser.id
        }))
            .then(entities => {
                const post = Object.values(entities['POSTS'])[0];
                hashHistory.push(`/profile/${post.user}/posts/${post.id}`);
            })
            .catch(error => {
                this.setState({error: error.response.data});
            });
    };

    onDrop = files => {
        this.setState({files});
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <form className="PostForm" onSubmit={handleSubmit(this.formSubmit)}>
                <FormStatus formState={this.state}/>
                <Field component={renderInput} label="Title" name="title"/>
                <Field component={renderTextArea} label="Body" name="body"/>
                <Dropzone className="drop-zone" onDrop={this.onDrop} multiple={false}>
                    <div className="content">
                        <i className="fa fa-camera"/>
                        <div className="top-text">Drop file to upload</div>
                        <div className="bottom-text">or CLICK</div>
                    </div>
                </Dropzone>
                <ul>
                    {this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}
                </ul>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }

}

PostForm = reduxForm({
    form: 'PostForm'
})(PostForm);

export default connect(state => ({
    activeUser: state.activeUser,
    posts: state.posts
}))(PostForm);
