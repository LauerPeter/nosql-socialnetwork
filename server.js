

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

// Use API routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});