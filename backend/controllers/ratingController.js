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

const getRatings = asyncHandler(async (req, res) => {
  const { userID } = req.body;
  try {
    const ratings = await Rating.find({ user: userID }).populate({
      path: 'book',
      select: 'title coverImage',
      populate: { path: 'author', select: 'name -_id' },
    });
    if (ratings.length > 0) {
      res.status(200).json(ratings);
    } else {
      res.status(200).json(`user hasnt rated any books`);
    }
  } catch (error) {
    res.status(400);
    console.error(error);
  }
});

module.exports = { createRating, getRatings };
