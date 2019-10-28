import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(value => console.log(value))}>
          <Field
            label="Survey Title"
            type="text"
            name="title"
            component={SurveyField}
          />
          <Field
            label="Subject Line"
            type="text"
            name="subject"
            component={SurveyField}
          />
          <Field
            label="Email Body"
            type="text"
            name="body"
            component={SurveyField}
          />
          <Field
            label="Recipient List"
            type="text"
            name="email"
            component={SurveyField}
          />
          <Link to="/surveys" className="pink btn-flat left white-text">
            Cancel
            <i className="material-icons right">clear</i>
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) errors.title = 'A title is required';
  if (!values.subject) errors.subject = 'A subject is required';
  if (!values.body) errors.body = 'A body is required';
  //validate emails from util/validateEmails
  errors.email = validateEmails(values.email || '');
  if (!values.email) errors.email = 'An email is required';
  return errors;
};

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);
