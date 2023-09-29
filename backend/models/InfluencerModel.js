const mongoose = require('mongoose');

const influencerSchema = mongoose.Schema({
  name: String,
  bio: String,
  tags: String,
  books: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Book' }],
  image: String,
});

module.exports = mongoose.model('Influencer', influencerSchema);
