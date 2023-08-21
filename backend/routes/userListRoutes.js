const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addToList, getLists } = require('../controllers/listController');

router.post('/', protect, addToList);

router.get('/getLists', protect, getLists);

module.exports = router;
