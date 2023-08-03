import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Logo from '../Components/Logo';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
import { registerUser } from '../features/Auth';

export const RegisterHeader = () => {
  return <h2 className="register-heading">Welcome to Readfluence</h2>;
};

export const Input = ({ type, placeholder, id, name, value, onChange }) => {
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
export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords dont match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      await Auth.registerUser(userData);
    }
  };

  return (
    <Paper elevation={5} className="form-container">
      <form className="form">
        <label>Name:</label>
        <Input
          type="text"
          placeholder="Name"
          id="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <Input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label>Confirm Password:</label>
        <Input
          type="password"
          placeholder="Confirm Password"
          id="password2"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          fullWidth={true}
          className="submitBtn"
          size="medium"
        >
          Create free account
        </Button>
      </form>
    </Paper>
  );
};

export const RegisterNav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <nav className="registerNav">
      <div className="registerNav-container">
        <Logo />
        <div className="registerNav-right-container">
          <span>Already have an account?</span>
          <Button variant="outlined" size="medium" onClick={handleClick}>
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Register = () => {
  return (
    <div className="Register">
      <RegisterNav />
      <div className="register-container">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
