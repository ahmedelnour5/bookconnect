const mongoose = require('mongoose');

const followerSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  followers: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
  followerCount: { type: Number, default: 0 },
});

followerSchema.pre('save', async function () {
  this.followerCount = this.followers.length;
});
module.exports = mongoose.model('Follower', followerSchema);
