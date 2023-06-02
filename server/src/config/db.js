const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.MONGODB_URL;
const uri_local = process.env.MONGODBLOCAL_URL

async function db() {
    mongoose.connect(uri_local)
    console.log('Database connected')
}

module.exports = db;