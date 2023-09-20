const mongoose = require('mongoose');

const followingSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  following: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
  followingCount: { type: Number, default: 0 },
});

followingSchema.pre('save', async function () {
  this.followingCount = this.following.length;
});

module.exports = mongoose.model('Following', followingSchema);
