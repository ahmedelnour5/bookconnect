import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Book from '../Components/Book';

const BookList = () => {
  const { category } = useParams();
  const API_URL = `http://localhost:8080/api/books`;
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const BOOKS_PER_PAGE = 20; // Number of books to display per page

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiUrl = category ? `${API_URL}/${category}` : API_URL;
        const response = await axios.get(apiUrl);
        const allBooks = response.data;
        const totalPages = Math.ceil(allBooks.length / BOOKS_PER_PAGE);
        setTotalPages(totalPages);

        const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
        const endIndex = startIndex + BOOKS_PER_PAGE;
        const booksToDisplay = allBooks.slice(startIndex, endIndex);

        setBooks(booksToDisplay);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, [currentPage, category]);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="BookList">
      {books ? books.map((b) => <Book key={b._id} book={b} />) : null}
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
