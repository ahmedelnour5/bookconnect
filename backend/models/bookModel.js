const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'Author' },
  category: [String],
  updatedAt: { type: Date, default: Date.now },
  coverImage: String,
  ratings: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'rating' }],
});

module.exports = mongoose.model('Book', bookSchema);
