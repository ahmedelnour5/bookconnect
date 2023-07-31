const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on Port ${port}`));
