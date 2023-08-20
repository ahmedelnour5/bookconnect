import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import useBooks from '../../Hooks/useBooks';
import Book from './Book';

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { books, totalPages } = useBooks(currentPage);

  const renderBooks = () => {
    return books ? books.map((b) => <Book key={b._id} book={b} />) : null;
  };

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="BookList">
      {renderBooks()}
      <Pagination
        className="pagination"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        size="large"
      />
    </div>
  );
};

export default BookList;
