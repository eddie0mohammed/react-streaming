import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import {withRouter} from 'react-router-dom';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        createStream: (formValues) => dispatch(actionCreators.createStream(formValues))
    }
}

export default withRouter(connect(null, mapDispatchToProps)((StreamCreate)));