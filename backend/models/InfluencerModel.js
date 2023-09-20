const mongoose = require('mongoose');

const influencerSchema = mongoose.Schema({
  name: { type: String },
  bio: { type: String },
  tags: { type: String },
  books: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Book' }],
});

module.exports = mongoose.model('Influencer', influencerSchema);
