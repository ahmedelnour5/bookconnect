import axios from 'axios';
const API_URL = 'http://localhost:8080/api/users';

//register user
export const registerUser = async (userData) => {
  const { data } = axios.post(API_URL, userData);

  if (data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return data;
};

//login user
const loginUser = async (userData) => {
  const { data } = await axios.post(API_URL + '/login', userData);

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  return data;
};

//logout user
const logout = async () => {
  localStorage.removeItem('user');
};

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  } else {
    return null;
  }
};

const Auth = {
  registerUser,
  loginUser,
  logout,
  getUser,
};

export default Auth;
