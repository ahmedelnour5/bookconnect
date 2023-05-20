import react from 'react';
import Box from '@mui/material/Box';
import Logo from './Logo';
import '../styles/Signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {
  return (
    <div className="App">
      <Box
        className="signUp"
        component="form"
        sx={{ mt: 15, width: 500, height: 600, boxShadow: 24, borderRadius: 4 }}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
      >
        <div className="signUpHeadContainer">
          <Logo />
          <h1 className="signUpHead">Create an account</h1>
        </div>
        <div className="signUp-form">
          <input type="text" name="name" id="name" placeholder="Name"></input>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          ></input>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
          ></input>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#d41929',
              color: '#ffffff',
              marginTop: '15px',
              padding: '10px',
            }}
          >
            Sign-Up
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Signup;
