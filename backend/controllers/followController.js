const asyncHandler = require('express-async-handler');
const Follower = require('../models/followerModel');
const Following = require('../models/followingModel');
const User = require('../models/userModel');

const follow = asyncHandler(async (req, res) => {
  const { username } = req.body;

  try {
    const follower = await Following.find({ user: req.user.id });
    if (!follower) {
      return res.status(404).json({ message: 'Follower not found' });
    }
    const followeeUser = await User.findOne({ username });
    if (!followeeUser) {
      return res.status(404).json({ message: 'Followee user doc not found' });
    }
    const followee = await Follower.find({ user: followeeUser });
    if (!followee) {
      return res.status(404).json({ message: 'Followee doc not found' });
    }

    if (follower.followingCount > 0 && followee.followerCount > 0) {
      follower.following.push(followeeUser);
      followee.followers.push(req.user.id);
      return res
        .status(200)
        .json({ message: `Succesfully followed ${username}` });
    } else if (followee.followerCount > 0) {
      const newFollower = await Following.create({
        user: req.user.id,
        following: [],
      });
      if (!newFollower) {
        return res
          .status(404)
          .json({ message: 'Follower doc could not be created' });
      }
      newFollower.following.push(followeeUser);
      followee.followers.push(req.user.id);
      await newFollower.save();
      await followee.save();
      return res
        .status(200)
        .json({ message: `Succesfully followed ${username}` });
    } else {
      const newFollowee = await Follower.create({
        user: followeeUser,
        followers: [],
      });
      if (!newFollowee) {
        return res
          .status(404)
          .json({ message: 'Followee doc could not be created' });
      }
      const newFollower = await Following.create({
        user: req.user.id,
        following: [],
      });
      if (!newFollower) {
        return res
          .status(404)
          .json({ message: 'Follower doc could not be created' });
      }
      newFollowee.followers.push(req.user.id);
      newFollower.following.push(followeeUser);
      await newFollowee.save();
      await newFollower.save();
      return res
        .status(200)
        .json({ message: `Succesfully followed ${username}` });
    }
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
});

const unfollow = asyncHandler(async (req, res) => {
  const { username } = req.body;

  const follower = await Following.findOneAndUpdate({ user: req.user.id });
  const followee = await User.findOne({ username });

  try {
    if (follower && followee) {
      follower.following.pull({ user: followee });
      followee.followers.pull(req.user.id);
      await follower.save();
      await followee.save();
      return res
        .status(200)
        .json({ message: `Successfully unfollowed ${followee}` });
    }
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
});

module.exports = { follow, unfollow };
