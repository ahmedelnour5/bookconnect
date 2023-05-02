import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

function Login() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#dc4753',
        main: '#d41929',
        dark: '#94111c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#000',
        dark: '#b2b2b2',
        contrastText: '#fff',
      },
    },
  });
  return (
    <div className="login">
      <Button
        variant="outlined"
        style={{
          color: theme.palette.secondary.light,
          borderColor: theme.palette.secondary.light,
        }}
      >
        Sign in
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.secondary.main,
          marginLeft: '10px',
        }}
      >
        Sign up
      </Button>
    </div>
  );
}

export default Login;
