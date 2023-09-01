import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import Landing from './Pages/Landing.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import Books from './Pages/Books.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import UserProvider from './Context/UserContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />} />
      <Route path="/books" element={<Books />} />
      <Route path="/categories/:category" element={<Books />} />
      <Route path="login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);
