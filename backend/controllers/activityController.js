const asyncHandler = require('express-async-handler');
const Activity = require('../models/activityModel');
const Following = require('../models/followingModel');

const createActivity = asyncHandler(async (req, res) => {
  const { activity, book } = req.body;
  try {
    const newActivity = await Activity.create({
      user: req.user.id,
      activityType: activity,
      book: book,
    });
    if (newActivity) {
      res.status(200).json({ message: 'Activity successfully recorded' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

const getActivities = asyncHandler(async (req, res) => {
  try {
    let activities = [];
    const following = await Following.find({ user: req.user.id }).populate({
      path: 'following',
      select: '_id',
    });

    if (following) {
      const activityPromises = following.map(async (user) => {
        const userActivities = await Activity.find({ user: user._id }).populate(
          {
            path: 'book',
          }
        );
        activities.push(...userActivities); // Accumulate activities
      });

      await Promise.all(activityPromises); // Wait for all activityPromises to resolve
    }

    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
});

module.exports = { createActivity, getActivities };
