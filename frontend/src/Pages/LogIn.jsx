import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import { UserContext } from '../Context/UserContext';
import Logo from '../Components/Header/Logo';
import Input from '../Components/Form/Input';
import Auth from '../features/Auth';
import '../Styles/Login.css';
import FormGroup from '../Components/Form/FormGroup';
import FormContainer from '../Components/Form/FormContainer';

const LogIn = () => {
  return (
    <div className="Login">
      <div className="container">
        <LogInForm />
      </div>
    </div>
  );
};

const LogInForm = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
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

    const response = await Auth.loginUser(userData);
    if (response) {
      const stringResponse = JSON.stringify(response);
      setUser(JSON.parse(stringResponse));
      console.log(user);
      navigate('/dashboard');
    }
  };

  return (
    <LoginCard>
      <Logo />
      <LoginHeader />
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup label={'Email:'}>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <FormGroup label={'Password:'}>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <Button
          type="submit"
          variant="outlined"
          size="medium"
          className="submitBtn"
          fullWidth={true}
        >
          Continue
        </Button>
      </FormContainer>
    </LoginCard>
  );
};

const LoginCard = ({ children }) => {
  const paperStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 2,
    width: 500,
    height: 450,
    p: 7,
    fontFamily: 'inherit',
  };
  return (
    <Paper elevation={5} sx={paperStyles}>
      {children}
    </Paper>
  );
};

const LoginHeader = () => {
  return <h3>Sign in to Readfluence</h3>;
};

export default LogIn;
