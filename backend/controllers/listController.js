const asyncHandler = require('express-async-handler');
const UserList = require('../models/listModel');

const addToList = asyncHandler(async (req, res) => {
  const { book, selectedList } = req.body;

  try {
    // find user's list
    const list = await UserList.findOne({
      user: req.user.id,
      listName: selectedList,
    });
    //if list exists, add the book to books array
    if (list) {
      if (list.books.includes(book)) {
        res.status(400).json(`Book already exists in ${listName}`);
      } else {
        //check if book in array
        list.books.push(book);
        await list.save();

        res.status(200).json({ message: 'Book added successfully' });
      }
      //list doesn't exist.Create list and add book
    } else {
      const newList = await UserList.create({
        user: req.user.id,
        listName: selectedList,
      });
      if (newList) {
        newList.books.push(book);
        await newList.save();
        res.status(200).json({ message: 'Book added successfully' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

const getLists = asyncHandler(async (req, res) => {
  try {
    const lists = await UserList.find(
      { user: req.user.id },
      'listName'
    ).populate({
      path: 'books',
      select: 'title coverImage',
      populate: { path: 'author', select: 'name -_id' },
    });

    if (lists.length > 0) {
      res.status(200).json(lists);
    } else {
      res.status(200).json('No lists!');
    }
  } catch (error) {
    res.status(400);
    console.error(error);
  }
});

module.exports = { addToList, getLists };
