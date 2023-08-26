const mongoose = require('mongoose');

const followingSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  following: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'user' }],
});

module.exports = mongoose.model('Following', followingSchema);
