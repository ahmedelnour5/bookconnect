import React from 'react';
import Paper from '@mui/material/Paper';
import Logo from '../Components/Logo';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';

export const RegisterHeader = () => {
  return <h2 className="register-heading">Welcome to Readfluence</h2>;
};
export const RegisterForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <input type="text" placeholder="Name" name="name"></input>
        <input type="text" placeholder="E-mail" name="email"></input>
        <input type="password" placeholder="Password" name="password"></input>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
        ></input>
        <Button variant="contained" fullWidth={true} className="submitBtn">
          Create a free account
        </Button>
      </form>
    </div>
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
