const Book = require('./models/bookModel');
const Author = require('./models/authorModel');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config({ path: '../.env' });
const connectDB = require('./config/db');
const axios = require('axios');
const { error } = require('console');

connectDB();

const influencers = JSON.parse(
  fs.readFileSync(
    'books_by_person.json',
    { encoding: 'utf-8' },
    function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    }
  )
);

//loop over influencer objs and call isBookexists. If book does not exist, add to newbooks. return newbooks
const processInfluencers = async () => {
  console.log('processing influencers...'.bgRed);
  const newBooks = [];
  const influencerArray = Object.keys(influencers);
  for (const influencer of influencerArray) {
  }

  return newBooks;
};

processInfluencers();
