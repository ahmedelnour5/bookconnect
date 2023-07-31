const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String,
});

authorSchema.virtual('author', {
  ref: 'book',
  localField: '_id',
  foreignField: 'author',
});

module.exports = mongoose.model('Author', authorSchema);
