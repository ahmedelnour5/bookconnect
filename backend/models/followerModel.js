const mongoose = require('mongoose');

const followerSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  followers: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'user' }], //users that follow this users
});

module.exports = mongoose.model('Follower', followerSchema);
