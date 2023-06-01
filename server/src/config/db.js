const mongoose = require('mongoose');
require('dotenv').config()

// 'mongodb://127.0.0.1:27017/MERN-TEST-2'
const uri = process.env.MONGODB_URL;

async function db() {
    mongoose.connect(uri)
    console.log('Database connected')
}

module.exports = db;