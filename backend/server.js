const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const port = 8080;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/userLists', require('./routes/userListRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/activity', require('./routes/activityRoutes'));
app.use('/api/ratings', require('./routes/ratingRoute'));
app.listen(port, () => console.log(`Server started on Port ${port}`));
