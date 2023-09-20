const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
  book: { type: mongoose.SchemaTypes.ObjectId, ref: 'Book' },
  rating: { type: Number, min: 1, max: 5 },
  summary: { type: String },
});

module.exports = mongoose.model('Rating', ratingSchema);
