import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Buttons() {
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
        component={Link}
        to="/Login"
      >
        Sign in
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.secondary.main,
          marginLeft: '10px',
        }}
        component={Link}
        to="/Signup"
      >
        Sign up
      </Button>
    </div>
  );
}

export default Buttons;
