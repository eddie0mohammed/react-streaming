import React, {Component} from 'react';
import Modal from '../../modal/Modal';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';


class StreamDelete extends Component{
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    handleDelete = (id) => {
        this.props.deleteStream(id);
        this.props.history.push('/');
    }
    

    actions = () => {
     return (
        <div>
            <button onClick={() => this.handleDelete(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </div>
     )

    }

    renderContent = () => {
        if (!this.props.stream){
            return 'Are you sure you want to delete this stream ?'
        }
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render (){
        return (
                <Modal title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.actions}
                    onDismiss={() => this.props.history.push('/')}/>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return {
        stream: state.streams[id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(actionCreators.fetchStream(id)),
        deleteStream: (id) => dispatch(actionCreators.deleteStream(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StreamDelete));
