const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'Author' },
  description: String,
  category: [String],
  updatedAt: { type: Date, default: Date.now },
  coverImage: String,
});

module.exports = mongoose.model('Book', bookSchema);
