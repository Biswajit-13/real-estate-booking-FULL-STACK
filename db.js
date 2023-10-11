const mongoose = require('mongoose');

// MongoDB Atlas connection URI (replace with your own)
const mongoURI = "mongodb+srv://biswajit:biswajit123@cluster0.i9zckhp.mongodb.net/?retryWrites=true&w=majority";

// Create a connection to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle MongoDB Atlas connection error
db.on('error', (err) => {
  console.error('MongoDB Atlas connection error:', err);
});

// Handle MongoDB Atlas connection success
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;
