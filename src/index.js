const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;
const message = () => console.log(`Server Listening on port ${port}`);

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

// Routes
app.get('/', (req, res) => res.send(`Welcome to my API`));

// mongo connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));

app.listen(port, message);
