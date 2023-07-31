const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({}, 'title coverImage').populate({
    path: 'author',
    select: 'name -_id',
  });

  return res.status(200).json(books);
});

const getBooksByCat = asyncHandler(async (req, res) => {
  const category = req.params.category;

  const books = await Book.find(
    { category: category },
    'title coverImage'
  ).populate({
    path: 'author',
    select: 'name -_id',
  });

  res.status(200).json(books);
});

module.exports = { getBooks, getBooksByCat };
