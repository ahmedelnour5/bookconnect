import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../../Styles/Header.css';

const AuthBtns = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="authBtnGroup">
      <Button className="sign-In-Btn" size="medium" onClick={handleSignIn}>
        Sign in
      </Button>
      <Button
        className="sign-Up-Btn"
        variant="contained"
        size="medium"
        onClick={handleSignUp}
      >
        Sign up
      </Button>
    </div>
  );
};

export default AuthBtns;
