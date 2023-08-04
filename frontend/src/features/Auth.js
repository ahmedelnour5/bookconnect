const API_URL = 'http://localhost:8080/api/users';

//register user
export const registerUser = async (userData) => {
  const response = axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//login user
const loginUser = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = async (userData) => {
  localStorage.removeItem('user');
};

const Auth = {
  registerUser,
  loginUser,
  logout,
};

export default Auth;
