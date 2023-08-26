const asyncHandler = require('express-async-handler');
const Follower = require('../models/followerModel');
const Following = require('../models/followingModel');

const follow = asyncHandler(async (req, res) => {
  const { followeeID } = req.body;

  const follower = await Following.findOneAndUpdate({ user: req.user.id });
  const followee = await Follower.findOneAndUpdate({ user: followeeID });

  try {
    if (follower && followee) {
      follower.following.push(followeeID);
      followee.followers.push(req.user.id);
      await follower.save();
      await followee.save();
      return res
        .status(200)
        .json({ message: `Successfully followed ${followeeID}` });
    }
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
});

const unfollow = asyncHandler(async (req, res) => {
  const { followeeID } = req.body;

  const follower = await Following.findOneAndUpdate({ user: req.user.id });
  const followee = await Follower.findOneAndUpdate({ user: followeeID });

  try {
    if (follower && followee) {
      follower.following.pull(followeeID);
      followee.followers.pull(req.user.id);
      await follower.save();
      await followee.save();
      return res
        .status(200)
        .json({ message: `Successfully unfollowed ${followeeID}` });
    }
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
});

module.exports = { follow, unfollow };
