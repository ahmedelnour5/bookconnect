const asyncHandler = require('express-async-handler');
const Profile = require('../models/profileModel');

const getProfile = asyncHandler(async (req, res) => {
  const { requstedUser } = req.params.username;
  const userProfile = Profile.findOne({ user: requstedUser })
    .populuate('user')
    .populuate('following')
    .populuate('followers')
    .populate('lists');

  if (userProfile) {
    return res.status(200).json(userProfile);
  } else {
    return res.status(400).json({ messsage: 'Can not find user profile' });
  }
});

module.exports = { getProfile };
