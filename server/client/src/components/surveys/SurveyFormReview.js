import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h4>Please confirm your entries!</h4>
      <div>
        <label>Survey Title</label>
        <p>{formValues.title}</p>
      </div>
      <div>
        <label>Subject Line</label>
        <p>{formValues.subject}</p>
      </div>
      <div>
        <label>Email Body</label>
        <p>{formValues.body}</p>
      </div>
      <div>
        <label>Recipient List</label>
        <p>{formValues.recipients}</p>
      </div>
      <div>
        <button
          className="yellow darken-3 btn-flat white-text"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          className="teal btn-flat right white-text"
          onClick={() => submitSurvey(formValues, history)}
        >
          Submit
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
