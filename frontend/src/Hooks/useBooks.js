import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function useBooks(currentPage) {
  const { category } = useParams();
  const API_URL = `http://localhost:8080/api/books`;
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const BOOKS_PER_PAGE = 20; // Number of books to display per page

  useEffect(() => {
    const getBooks = async () => {
      try {
        //fetch data
        const apiUrl = category ? `${API_URL}/${category}` : API_URL;
        const { data } = await axios.get(apiUrl);

        const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
        const endIndex = startIndex + BOOKS_PER_PAGE;
        const booksToDisplay = data.slice(startIndex, endIndex);
        setBooks(booksToDisplay);

        //calculate and set # of pages
        const calculateTotalPages = (totalItems) => {
          return Math.ceil(totalItems / BOOKS_PER_PAGE);
        };
        setTotalPages(calculateTotalPages(data.length));
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [category, currentPage]);
  return { books, totalPages };
}

export default useBooks;
