const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Rating = require('../models/ratingModel');
const UserList = require('../models/listModel');
const Following = require('../models/followingModel');
const Followers = require('../models/followerModel');

const getProfile = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params; // Use req.params.username to get the username from the URL

    // Find the user by their username
    const user = await User.findOne({ username }, '_id name username');

    if (!user) {
      // If the user is not found, return a 404 status and message
      return res.status(404).json({ message: 'User not found' });
    }

    const userProfile = {
      user: user,
      following: [],

      followers: [],

      lists: [],
      ratings: [],
    };

    const followingData = await Following.find({ user: user._id });
    const followersData = await Followers.find({ user: user._id });
    const listsData = await UserList.find({ user: user }, 'listname').populate({
      path: 'books',
      select: 'title coverImage',
      populate: { path: 'author', select: 'name -_id' },
    });
    const ratingsData = await Rating.find({ user: user }).populate({
      path: 'book',
      select: 'title coverImage',
      populate: { path: 'author', select: 'name -_id' },
    });

    userProfile.following = followingData;
    userProfile.numOfFollowees = followingData.followingCount;
    userProfile.followers = followersData;
    userProfile.numOfFollowers = followersData.followerCount;
    userProfile.lists = listsData;
    userProfile.ratings = ratingsData;

    res.status(200).json(userProfile);
  } catch (err) {
    // Handle any unexpected errors
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = { getProfile };
