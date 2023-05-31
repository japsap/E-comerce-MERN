const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/MERN-TEST-2';

async function db() {
    mongoose.connect(uri)
    console.log('Database connected')
}

module.exports = db;