import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {withRouter} from 'react-router-dom';

class StreamForm extends Component {


    renderError = (meta) => {
        const {touched, error} = meta;
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        return (
            <div className={`field ${formProps.meta.error && formProps.meta.touched ? `error`: ``}`}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        )
    } 

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);

    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title){
        errors.title = 'You must enter a title';
    }
    if (!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}


export default withRouter(reduxForm({form: 'StreamForm', validate })(StreamForm));