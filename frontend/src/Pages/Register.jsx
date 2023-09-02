import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Logo from '../Components/Header/Logo';
import Input from '../Components/Form/Input';
import FormContainer from '../Components/Form/FormContainer';
import FormGroup from '../Components/Form/FormGroup';
import Auth from '../features/Auth';
import '../Styles/Register.css';
import { UserContext } from '../Context/UserContext';

const RegisterForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, username, email, password, password2 } = formData;

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
        username,
        email,
        password,
      };

      const response = await Auth.registerUser(userData);
      if (response) {
        const stringResponse = JSON.stringify(response);
        setUser(JSON.parse(stringResponse));
        navigate('/dashboard');
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup label={'Name:'}>
        <Input
          type="text"
          placeholder="Name"
          id="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup label={'Username:'}>
        <Input
          type="text"
          placeholder="Username"
          id="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup label={'Email:'}>
        <Input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup label={'Password:'}>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup label={'Confirm Password:'}>
        <Input
          type="password"
          placeholder="Confirm Password"
          id="password2"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
      </FormGroup>
      <Button
        variant="contained"
        fullWidth={true}
        className="submitBtn"
        size="medium"
        type="submit"
      >
        Create free account
      </Button>
    </FormContainer>
  );
};

const RegisterNav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <nav className="registerNav">
      <div className="registerNav-container">
        <Logo to={'/landing'} />
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
    <>
      <RegisterNav />
      <div className="Register">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
