const express = require('express');
const router = express.Router();

const { getBooks, getBooksByCat } = require('../controllers/bookController');

router.get('/', getBooks);
router.get('/:category', getBooksByCat);

module.exports = router;
