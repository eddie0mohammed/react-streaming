import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import {Link} from 'react-router-dom';

class StreamList extends Component {
    
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">Title: {stream.title}</Link>
                        <div className="description">Description: {stream.description}</div>
                    </div>
                   
                </div>
            )
        })
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to='/streams/new' className="ui button primary" >Create Stream</Link>
                </div>
            )
            
        }
    }


    render(){
        return (
            <div>
                <h2>StreamList</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateButton()}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStreams: () => dispatch(actionCreators.fetchStreams()),

    }
}

export default connect( mapStateToProps, mapDispatchToProps)(StreamList);
