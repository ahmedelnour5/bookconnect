const Rating = require('../models/ratingModel');
const asyncHandler = require('express-async-handler');

const createRating = asyncHandler(async (req, res) => {
  const { rating, thoughts, book } = req.body;
  try {
    const newRating = await Rating.create({
      user: req.user.id,
      book,
      rating,
      thoughts,
    });

    await newRating.save();
    res.status(200).json({ message: 'Sucessfully added rating' });
  } catch (error) {
    res.status(400).json({ message: '' + error });
  }
});

module.exports = { createRating };
