const mongoose = require('mongoose');

const activitySchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    activityType: {
      type: String,
      enum: ['addToList', 'removeFromList', 'bookRating', 'bookSummary'],
      required: true,
    },
    book: { type: mongoose.SchemaTypes.ObjectId, ref: 'Book', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
