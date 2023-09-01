import React from 'react';
import '../../Styles/FormContainer.css';

const FormContainer = ({ children, onSubmit }) => {
  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
