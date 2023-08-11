import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Logo from '../Components/Logo';
import Input from '../Components/Input';
import loginUser from '../features/Auth';
import '../Styles/Login.css';

const LoginHeader = () => {
  return <h3>Sign in to Readfluence</h3>;
};

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
  };

  return (
    <Paper elevation={5} className="form-container">
      <Logo />
      <LoginHeader />
      <form className="form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        ></Input>
        <label>Password:</label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        ></Input>
        <Button
          type="submit"
          variant="outlined"
          size="medium"
          className="submitBtn"
          fullWidth={true}
        >
          Continue
        </Button>
      </form>
    </Paper>
  );
};

const LogIn = () => {
  return (
    <div className="Login">
      <div className="container">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
