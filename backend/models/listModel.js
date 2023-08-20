const mongoose = require('mongoose');

const userListSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  listName: {
    type: String,
    enum: ['Want to Read', 'Read', 'Currently Reading', 'Recommendations'],
  },
  books: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Book' }],
});

module.exports = mongoose.model('UserList', userListSchema);
