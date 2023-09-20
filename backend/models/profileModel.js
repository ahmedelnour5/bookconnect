const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  following: { type: mongoose.SchemaTypes.ObjectId, ref: 'following' },
  followers: { type: mongoose.SchemaTypes.ObjectId, ref: 'followers' },
  lists: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'userlist' }],
  ratings: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'ratings' }],
});

module.exports = mongoose.model('Profile', profileSchema);
