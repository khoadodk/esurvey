import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontSize: '15px' }}>{label}</label>
      <input {...input} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};

export default SurveyField;
