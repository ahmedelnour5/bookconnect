import React from 'react';
import Header from '../Components/Header/Header';
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
  return (
    <div className="Books">
      <Header />
      <div className="books-container">
        <BooksGrid />
      </div>
    </div>
  );
};

export default Books;
