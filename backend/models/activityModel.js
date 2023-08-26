const mongoose = require('mongoose');

const activitySchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    activityType: {
      type: String,
      enum: ['addToList', 'removeFromList', 'bookRating'],
      required: true,
    },
    book: { type: mongoose.SchemaTypes.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, min: 1, max: 5 },
    summary: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
