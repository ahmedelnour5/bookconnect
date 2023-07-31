const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  userRating: { type: Number, min: 1, max: 5 },
});

module.exports = mongoose.model('Rating', ratingSchema);
