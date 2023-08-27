

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());

//connection to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//use api routes
app.use('/api', routes);

//start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});