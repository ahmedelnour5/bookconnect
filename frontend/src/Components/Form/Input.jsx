import React from 'react';

const Input = ({ type, placeholder, id, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
