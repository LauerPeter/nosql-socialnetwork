

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/social_network'; 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

module.exports = db;