const express = require('express');
const router = express.Router();

const { addToList } = require('../controllers/listController');

router.post('/', addToList);

module.exports = router;
