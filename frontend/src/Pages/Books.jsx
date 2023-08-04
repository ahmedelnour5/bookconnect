import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import BooksNav from '../Components/BooksNav';

const BooksGrid = () => {
  return (
    <div className="gridContainer">
      <BooksNav />
    </div>
  );
};

const Books = () => {
  return (
    <div className="Books">
      <Header />
      <div className="container">
        <BooksGrid />
      </div>
    </div>
  );
};

export default Books;
