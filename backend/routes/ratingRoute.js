const express = require('express');
const router = express.Router();
const { createRating, getRatings } = require('../controllers/ratingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/createRating', protect, createRating);

router.get('/', getRatings);

module.exports = router;
