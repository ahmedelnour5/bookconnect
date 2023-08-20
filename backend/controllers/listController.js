const asyncHandler = require('express-async-handler');
const UserList = require('../models/listModel');

const addToList = asyncHandler(async (req, res) => {
  const { userID, book, selectedList } = req.body;

  try {
    // find user's list
    const list = await UserList.findOne({
      user: userID,
      listName: selectedList,
    });
    //if list exists, add the book to books array
    if (list) {
      list.books.push(book);
      await list.save();
      res.status(200).json('Book added successfully');
      //list doesn't exist.Create list and add book
    } else {
      const newList = await UserList.create({
        user: userID,
        listName: selectedList,
      });
      if (newList) {
        newList.books.push(book);
        await newList.save();
        res.status(200).json('Book added successfully');
      }
    }
  } catch (error) {
    res.status(400);
    console.log(error);
  }
});

module.exports = { addToList };
