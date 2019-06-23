import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';


class StreamShow extends Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
        if (!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
