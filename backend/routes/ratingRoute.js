const express = require('express');
const router = express.router();
const { createRating } = require('../controllers/ratingController');

router.post('/', createRating);

module.exports = router;
