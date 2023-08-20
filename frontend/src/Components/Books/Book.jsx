import React, { useState } from 'react';
import AddToList from './AddToList';

const BookCover = ({ coverImg }) => {
  return (
    <div className="bookCover">
      <img className="coverImg" src={coverImg} loading="lazy"></img>
    </div>
  );
};

const BookDetails = ({ title, author }) => {
  return (
    <div className="bookDetails">
      <span className="book-title">{title}</span>
      <span className="book-author">{author}</span>
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <div className="book">
      <BookCover coverImg={book.coverImage} />
      <BookDetails title={book.title} author={book.author.name} />
      <AddToList coverImg={book.coverImage} book={book._id} />
    </div>
  );
};

export default Book;
