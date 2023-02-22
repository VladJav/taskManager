const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = (url) => {
    return mongoose.connect(connectionString);
};

module.exports = connectDB;
