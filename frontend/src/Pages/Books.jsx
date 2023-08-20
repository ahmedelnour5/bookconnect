import React from 'react';
import Header from '../Components/Header/Header';
import UserHeader from '../Components/Header/userHeader';
import BooksNav from '../Components/Books/BooksNav';
import BookList from '../Components/Books/BookList';

import '../Styles/Books.css';

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
