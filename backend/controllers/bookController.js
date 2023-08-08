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
  const requestedCategory = req.params.category;

  try {
    const books = await Book.find(
      { category: requestedCategory },
      'title coverImage'
    ).populate({
      path: 'author',
      select: 'name -_id',
    });

    if (books) {
      return res.status(200).json(books);
    }
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
});

module.exports = { getBooks, getBooksByCat };
