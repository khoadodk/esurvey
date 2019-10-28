import React from 'react';
//label and meta are redux-form props
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
