import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import BooksNav from '../Components/BooksNav';
import BookList from '../Components/BookList';
import '../Styles/Books.css';
import UserHeader from '../Components/userHeader';

const BooksGrid = () => {
  return (
    <div className="gridContainer">
      <BooksNav />
      <BookList />
    </div>
  );
};

const Books = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const name = user ? user.name : '';

  return (
    <div className="Books">
      {user ? <UserHeader name={name} /> : <Header />}
      <div className="books-container">
        <BooksGrid />
      </div>
    </div>
  );
};

export default Books;
