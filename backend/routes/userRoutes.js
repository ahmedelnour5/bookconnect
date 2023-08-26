const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { registerUser, loginUser } = require('../controllers/userController');
const { follow, unfollow } = require('../controllers/followController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/follow', protect, follow);
router.post('/unfollow', protect, unfollow);

module.exports = router;
