import React from 'react';
import Button from '@mui/material/Button';

const AuthBtns = () => {
  return (
    <div className="authBtnGroup">
      <Button className="sign-In-Btn" size="medium">
        Sign in
      </Button>
      <Button className="sign-Up-Btn" variant="contained" size="medium">
        Sign up
      </Button>
    </div>
  );
};

export default AuthBtns;
