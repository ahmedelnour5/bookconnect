import React from 'react';
import '../../Styles/FormContainer.css';
const FormGroup = ({ children, label }) => {
  return (
    <div className="formGroup">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default FormGroup;
