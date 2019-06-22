import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import StreamForm from './StreamForm';
import _ from 'lodash';
 
class StreamEdit extends Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
        this.props.history.push('/');

    }

    render(){
        if (!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')} />
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        stream: state.streams[id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(actionCreators.fetchStream(id)),
        editStream: (id, formValues) => dispatch(actionCreators.editStream(id, formValues)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
