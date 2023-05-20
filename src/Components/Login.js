import React from 'react';
import Logo from './Logo';
import Button from '@mui/material/Button';
import '../styles/Login.css';
import Paper from '@mui/material/Paper';

function Login() {
  return (
    <div className="container">
      <Paper
        component="form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '400px',
          width: '500px',
        }}
        elevation={24}
      >
        <Logo />
        <div className="form">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          ></input>
          <input
            type=""
            name="password"
            id="password"
            placeholder="password"
          ></input>
          <Button variant="contained" fullWidth="true">
            Log-in
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Login;
